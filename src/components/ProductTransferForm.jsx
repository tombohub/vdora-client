import React, { useEffect, useState } from "react";
import axios from "axios";
import format from "date-format";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { type } from "os";

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
  const [note, setNote] = useState();

  /* --------------------------- components options --------------------------- */

  // options for Dropdown component
  const [locationOptions, setLocationOptions] = useState([]);

  // options for Autocomplete component
  const [productOptions, setProductOptions] = useState([]);

  // filtered products suggestions for Autocomplete component while typing
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      setFromLocation(locations[0].name);
      setToLocation(locations[1].name);

      // prepare locations to be used as options in Dropdown component. { label: 'label', value: 'value' }
      const newLocationOptions = locations.map(location => ({
        label: location.name,
        value: location.name,
      }));
      setLocationOptions(newLocationOptions);
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
      .post("http://localhost:8000/inventory/transactions/", {
        date: (date => format("yyyy-MM-dd", date))(), // because original date is ISO datetim format
        quantity: quantity,
        product: product.id,
        type: "lo",
        location: "lo",
        note: note,
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  /* --------------------------------- return --------------------------------- */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Dropdown
          placeholder="Select FROM location"
          value={fromLocation}
          options={locationOptions}
          onChange={e => setFromLocation(e.value)}
        />
        <Dropdown
          placeholder="Select TO location"
          value={toLocation}
          options={locationOptions}
          onChange={e => setToLocation(e.value)}
        />
        <InputNumber
          value={quantity}
          onValueChange={e => setQuantity(e.value)}
          showButtons
          min={1}
        />
        <AutoComplete
          field="name"
          value={product}
          placeholder="Product"
          suggestions={filteredProducts}
          completeMethod={filterProducts}
          onChange={e => setProduct(e.value)}
        />
        <InputTextarea
          value={note}
          onChange={e => setNote(e.value)}
        />
        <Calendar
          dateFormat="yy-mm-dd"
          value={date}
          onChange={e => setDate(e.value)}
        />

        <Button label="Submit" icon="pi pi-check" />
      </form>
    </>
  );
}
