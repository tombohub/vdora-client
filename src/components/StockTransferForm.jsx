import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function StockTransferForm() {
  const [locationValue, setLocationValue] = useState("Nooks");
  const locationsSelectItems = [
    { label: "Nooks", value: "Nooks" },
    { label: "In-house", value: "In-house" },
  ];

  return (
    <>
      <form action="">
        <Dropdown
          placeholder="Select from location"
          value={locationValue}
          options={locationsSelectItems}
          onChange={e => setLocationValue(e.value)}
        />
      </form>
    </>
  );
}
