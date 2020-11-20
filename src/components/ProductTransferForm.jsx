import React, { useEffect, useState } from "react";
import axios from "axios";
import format from "date-format";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";

/**
 * Form for transfering, moving products (stock) from one location to another
 * Fetching locations and products from database.
 */
export default function ProductTransferForm() {
  /* ------------------------------ transfer data ----------------------------- */

  // location from where the product is moved
  const [fromLocation, setFromLocation] = useState({});

  // destination where the product is moved to
  const [toLocation, setToLocation] = useState({});

  // product which is being transfered
  const [product, setProduct] = useState("");

  // quantity of products moved
  const [quantity, setQuantity] = useState(1);

  // date of product transfer
  const [date, setDate] = useState();

  // note, if any, to describe transfer
  const [note, setNote] = useState(null);

  /* --------------------------- components options --------------------------- */

  // options for Dropdown component
  const [locationOptions, setLocationOptions] = useState([]);

  // options for Autocomplete component
  const [productOptions, setProductOptions] = useState([]);

  // filtered products suggestions for Autocomplete component while typing
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    function handleLocationsResponse(locations) {
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
  function filterProducts(e) {
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
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/inventory/product-transfer/", {
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
      .then(res => console.log(res))
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

            <section className="my-4">
              <label htmlFor="product" className="block">
                Product
              </label>
              <AutoComplete
                required
                id="product"
                field="name"
                value={product}
                placeholder="Product"
                suggestions={filteredProducts}
                completeMethod={filterProducts}
                onChange={e => setProduct(e.value)}
              />
            </section>
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
              />
            </section>

            <section className="my-4">
              <label htmlFor="note" className="block">
                Note
              </label>
              <InputTextarea
                id="note"
                className="w-full"
                rows="4"
                value={note}
                onChange={e => setNote(e.target.value)}
              />
            </section>

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
            <Button
              label="Cancel"
              className="p-button-secondary p-button-text"
              onClick={() => setIsFormVisible(false)}
            />
            <Button
              label="Submit"
              icon="pi pi-check"
              className="float-right"
            />
          </form>
        </div>
      </Dialog>
    </>
  );
}