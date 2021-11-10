import * as React from "react";

import { Bar } from "react-chartjs-2";

import useApi from "../auth/useApi";

const BarChart = (props) => {
  const { loading, apiClient } = useApi();

  let donationData = props.donationData;
  let food20;
  let food21;

  let cpg20;
  let cpg21;

  if (donationData) {
    food20 = donationData[2].sum;
    food21 = donationData[0].sum;

    cpg20 = donationData[3].sum;
    cpg21 = donationData[1].sum;
  }

  return loading ? null : (
    <div class="chartbox">
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
