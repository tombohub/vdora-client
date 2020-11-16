import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { concat } from "@apollo/client";

export default function StockTransferForm() {
  const [fromLocation, setFromLocation] = useState("Nooks");
  const [toLocation, setToLocation] = useState("In-house");
  const [locationOptions, setLocationOptions] = useState([]);

  useEffect(() => {
    /**
     * Since the response is not the same as we need for Dropdown component
     * we need to prepare it and save state with setLocationOptions().
     * Also set FROM and TO locations. So if in any case database changes we don't need to
     * update here too.
     * @param {Response} locations API response with list of available locations
     */
    function handleResponse(locations) {
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

    axios
      .get("http://localhost:8000/inventory/locations/")
      .then(res => handleResponse(res.data.results))
      .catch(err => console.error(err));
  }, []);

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
      </form>
    </>
  );
}
