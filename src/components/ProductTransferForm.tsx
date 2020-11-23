import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import format from "date-format";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface ILocation {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  name: string;
  size: string | null;
  color: string | null;
  sku: string;
}

/**
 * Form for transfering, moving products (stock) from one location to another
 * Fetching locations and products from database.
 */
export default function ProductTransferForm() {
  /* ------------------------------ transfer data ----------------------------- */

  // location from where the product is moved
  const [fromLocation, setFromLocation] = useState({
    id: 1,
    name: "",
  });

  // destination where the product is moved to
  const [toLocation, setToLocation] = useState({
    id: 1,
    name: "",
  });

  // product which is being transfered
  const [product, setProduct] = useState({
    id: 1,
    name: "",
    size: "",
    color: "",
    sku: "",
  });

  // quantity of products moved
  const [quantity, setQuantity] = useState(1);

  // date of product transfer
  const [date, setDate] = useState<Date | Date[]>(new Date());

  // note, if any, to describe transfer
  const [note, setNote] = useState<string | null>(null);

  /* --------------------------- components options --------------------------- */

  // options for Dropdown component
  const [locationOptions, setLocationOptions] = useState<
    ILocation[]
  >();

  // options for Autocomplete component
  const [productOptions, setProductOptions] = useState<IProduct[]>(
    []
  );

  // filtered products suggestions for Autocomplete component while typing
  const [filteredProducts, setFilteredProducts] = useState<
    IProduct[]
  >([]);

  // toggle to make form visible or invisible
  const [isFormVisible, setIsFormVisible] = useState(false);

  /* -------------------------------- functions ------------------------------- */

  useEffect(() => {
    /**
     * Since the response is not the same as we need for Dropdown component
     * we need to prepare it and save state with setLocationOptions().
     * Also set FROM and TO locations. So if in any case database changes we don't need to
     * update here too.
     * @param {Response} locations API response with list of available locations
     */
    function handleLocationsResponse(locations: ILocation[]) {
      // set locations to state so dropdown is preselected
      setFromLocation(locations[1]); // in house
      setToLocation(locations[0]); // nooks

      // prepare locations to be used as options in Dropdown component. { label: 'label', value: 'value' }
      const newLocationOptions = locations.map(location => ({
        label: location.name,
        value: location.name,
      }));
      setLocationOptions(locations);
    }

    // fetch list of product locations
    axios
      .get("http://localhost:8000/inventory/locations/")
      .then(res => handleLocationsResponse(res.data.results))
      .catch(err => console.error(err));

    // fetch list of products
    axios
      .get("http://localhost:8000/inventory/products/")
      .then(res => setProductOptions(res.data.results))
      .catch(err => console.error(err));
  }, []);

  /**
   * Filters products based on typing in autocomplete input and sets the product suggestions
   * @param {event} event html event
   */
  function filterProducts(e: { query: string }) {
    const subString = e.query;
    //setInputValue(subString);

    // filter if product contains typed string
    if (subString !== "") {
      const regex = new RegExp(`${subString}`, "i");
      const newFilteredProducts = productOptions.filter(product =>
        regex.test(product.name)
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }

  // form submit
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    axios
      .post("inventory/product-transfer/", {
        // because original date is ISO datetime format
        get date() {
          return format("yyyy-MM-dd", date);
        },
        productId: product.id,
        quantity: quantity,
        fromLocationId: fromLocation.id,
        toLocationId: toLocation.id,
        note: note,
      })
      .then(res => {
        console.log(res);
        setIsFormVisible(false);
      })
      .catch(err => console.error(err));
  }

  /* --------------------------------- return --------------------------------- */

  return (
    <>
      <Card title="Create Product Transfer" className="w-1/3 m-4">
        <Button
          label="Start"
          onClick={() => setIsFormVisible(true)}
        />
      </Card>

      <Dialog
        className=" lg:w-1/3 sm:w-1/2 w-full"
        position="top"
        closable={false}
        visible={isFormVisible}
        dismissableMask={true}
        onHide={() => setIsFormVisible(false)}
      >
        <div className="">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center mb-4">
              Product transfer
            </h2>

            {/* LOCATIONS */}
            <section className="flex justify-between my-4">
              <div className="">
                <label htmlFor="from-location" className="block">
                  From
                </label>
                <Dropdown
                  required
                  id="from-location"
                  optionLabel="name"
                  value={fromLocation}
                  options={locationOptions}
                  onChange={e => setFromLocation(e.value)}
                />
              </div>
              <div className="">
                <label htmlFor="to-location" className="block">
                  To
                </label>
                <Dropdown
                  required
                  id="to-location"
                  optionLabel="name"
                  value={toLocation}
                  options={locationOptions}
                  onChange={e => setToLocation(e.value)}
                />
              </div>
            </section>

            {/* PRODUCT */}
            <section className="my-4 p-fluid">
              <label htmlFor="product" className="block">
                Product
              </label>
              <AutoComplete
                id="product"
                field="name"
                value={product}
                placeholder="Product"
                suggestions={filteredProducts}
                completeMethod={filterProducts}
                onChange={e => setProduct(e.value)}
              />
            </section>

            {/* QUANTITY */}
            <section className="my-4">
              <label htmlFor="quantity" className="block">
                Quantity
              </label>
              <InputNumber
                required
                id="quantity"
                className="w-full"
                value={quantity}
                onValueChange={e => setQuantity(e.value)}
                showButtons
                min={1}
                incrementButtonClassName="p-button-success"
                decrementButtonClassName="p-button-success"
              />
            </section>

            {/* NOTE */}
            <section className="my-4">
              <label htmlFor="note" className="block">
                Note
              </label>
              <InputTextarea
                id="note"
                className="w-full"
                rows={4}
                value={note}
                onChange={e => setNote(e.currentTarget.value)}
              />
            </section>

            {/* CALENDAR */}
            <section className="my-4">
              <label htmlFor="date" className="block">
                Date
              </label>
              <Calendar
                required
                id="date"
                className="w-full"
                dateFormat="yy-mm-dd"
                value={date}
                onChange={e => setDate(e.value)}
              />
            </section>

            {/* BUTTONS */}
            <Button
              label="Cancel"
              className="p-button-secondary p-button-text"
              onClick={() => setIsFormVisible(false)}
            />
            <Button
              label="Submit"
              icon="pi pi-check"
              className="float-right p-button-success"
            />
          </form>
        </div>
      </Dialog>
    </>
  );
}
