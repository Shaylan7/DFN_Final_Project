import * as React from "react";

import useApi from "../auth/useApi";

import BarChart from "./BarChart";

const DataVisuals = () => {
  const [data, setData] = React.useState("");
  const { loading, apiClient } = useApi();

  const loadData = async () => setData(await apiClient.getDonationData());

  React.useEffect(() => {
    !loading && loadData();
  }, [loading]);

  return (
    <div>
      <BarChart donationData={data} />
    </div>
  );
};

export default DataVisuals;
