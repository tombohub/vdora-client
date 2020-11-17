import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { AutoComplete } from "primereact/autocomplete";

/**
 * Form for transfering, moving products (stock) from one location to another
 * Fetching locations and products from database.
 */
export default function StockTransferForm() {
  //
  // location from where the product is moved
  const [fromLocation, setFromLocation] = useState("");

  // destination where the product is moved to
  const [toLocation, setToLocation] = useState("");

  // product which is being transfered
  const [product, setProduct] = useState("");

  // quantity of products moved
  const [quantity, setQuantity] = useState(1);

  // options for Dropdown component
  const [locationOptions, setLocationOptions] = useState([]);

  // options for Autocomplete component
  const [productOptions, setProductOptions] = useState([]);

  // filtered products suggestions for Autocomplete component while typing
  const [filteredProducts, setFilteredProducts] = useState([]);

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

    /**
     * turn the products response object into an array of products. Used for autocomplete
     * component suggestions
     * @param {response} productsResponse response containing the list of product objects
     */
    function handleProductsResponse(productsResponse) {
      const newProductOptions = productsResponse.map(
        product => product.name
      );

      setProductOptions(newProductOptions);
    }

    // fetch list of products
    axios
      .get("http://localhost:8000/inventory/products/")
      .then(res => handleProductsResponse(res.data.results))
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
        regex.test(product)
      );
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }

  /* --------------------------------- return --------------------------------- */

  return (
    <>
      <form action="">
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
          value={product}
          suggestions={filteredProducts}
          completeMethod={filterProducts}
          onChange={e => setProduct(e.value)}
        />
      </form>
    </>
  );
}
