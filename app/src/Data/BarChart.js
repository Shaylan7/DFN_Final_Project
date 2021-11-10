import * as React from "react";

import { Bar } from "react-chartjs-2";

import useApi from "../auth/useApi";

const BarChart = (props) => {
  const { loading, apiClient } = useApi();

  let donationData = props.donationData;
  console.log("yellow", donationData[0].year);
  console.log("red", donationData[1].product_type_id);

  let food20 = donationData[2].sum;
  let food21 = donationData[0].sum;

  let cpg20 = donationData[3].sum;
  let cpg21 = donationData[1].sum;

  return loading ? null : (
    <div>
      hello
      <Bar
        data={{
          labels: ["2020", "2021"],
          datasets: [
            {
              label: "Consumer Packaged Goods",
              data: [cpg20, cpg21],
              backgroundColor: ["#d7d0bdff", "#d7d0bdff"],
            },
            {
              label: "Food",
              data: [food20, food21],
              backgroundColor: ["#7b8c6cff", "#7b8c6cff"],
            },
          ],
        }}
        height={10}
        width={50}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default BarChart;
