import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Checkbox, CheckboxProps } from "primereact/checkbox";

interface IProps {
  className: string;
}

interface IPayout {
  payout_date: string;
  is_picked: boolean;
  payout_id: number;
  sum: number;
}

export default function NooksPayouts(props: IProps) {
  // payouts dates and amount data
  const [payouts, setPayouts] = useState<IPayout[]>([]);

  // fetch payouts sum and schedules
  useEffect(() => {
    axios
      .get("sales/reports/nooks-payouts/")
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
      .get("sales/reports/nooks-payouts", {
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
  function handleChecked(e: CheckboxProps, payout_id: number) {
    console.log(e.checked, payout_id);
    axios
      .patch(`nooks-payout-schedules/${payout_id}/`, {
        is_picked: e.checked,
      })
      .then(res => fetchNooksPayouts())
      .catch(err => console.error(err));
  }

  return (
    <>
      <Card
        title="Nooks Payouts"
        subTitle="Check amount"
        className={props.className}
      >
        <ul className="flex justify-between">
          {payouts.map((payout, i) => (
            <li key={i}>
              <p>{payout.payout_date}</p>
              <p>{payout.sum + " $"}</p>
              <Checkbox
                tooltip="Did you pick up the check?"
                checked={payout.is_picked}
                onChange={(e: CheckboxProps) =>
                  handleChecked(e, payout.payout_id)
                }
              ></Checkbox>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
