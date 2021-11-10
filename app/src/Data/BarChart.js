import * as React from "react";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      hello
      <Bar
        data={{
          labels: ["2020", "2021"],
          datasets: [
            {
              label: "Consumer Packaged Goods",
              data: [12, 19],
              backgroundColor: ["#d7d0bdff", "#d7d0bdff"],
            },
            {
              label: "Food",
              data: [13, 45],
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
