import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";

export default function NooksPayouts() {
  // payouts dates and amount data
  const [payouts, setPayouts] = useState([]);

  // fetch payouts sum and schedules
  useEffect(() => {
    axios
      .get("http://localhost:8000/sales/reports/nooks-payouts", {
        // auth: {
        //     username: context.username,
        //     password: context.password
        // },
      })
      .then(res => {
        const newPayouts = res.data;
        setPayouts(newPayouts);
      })
      .catch(err => console.error("error:", err));
  }, []);

  /**
   * Fetch nooks payouts. After checkbox is checked and database updated we fetch the data again to make
   * it's correct and avoid creating state which would hold the is_checked state
   */
  function fetchNooksPayouts() {
    axios
      .get("http://localhost:8000/sales/reports/nooks-payouts", {
        // auth: {
        //     username: context.username,
        //     password: context.password
        // },
      })
      .then(res => {
        const newPayouts = res.data;
        setPayouts(newPayouts);
      })
      .catch(err => console.error("error:", err));
  }

  /**
   * Set is_picked to true. (or false if reverted)
   *
   * @param {Event} e checkbox on change event
   * @param {Number} payout_id id of the payout from database nooks_payouts_schedule table
   */
  function handleChecked(e, payout_id) {
    console.log(e.checked, payout_id);
    axios
      .patch(
        `http://localhost:8000/nooks-payout-schedules/${payout_id}/`,
        {
          is_picked: e.checked,
        }
      )
      .then(res => fetchNooksPayouts())
      .catch(err => console.error(err));
  }

  return (
    <>
      <Card title="Nooks Payouts" subTitle="Amount of checks">
        <div className="flex">
          <div className="">
            {payouts.map((payout, i) => (
              <div key={i}>
                <p>{payout.payout_date}</p>
                <p>{payout.sum}</p>
                <Checkbox
                  checked={payout.is_picked}
                  onChange={(e, id) =>
                    handleChecked(e, payout.payout_id)
                  }
                ></Checkbox>
                <p>{payout.is_picked}</p>
                <p>{payout.payout_id}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}