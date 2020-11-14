import axios from "axios";

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
