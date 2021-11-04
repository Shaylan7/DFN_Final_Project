import * as React from "react";

import "./homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import useApi from "../auth/useApi";

import DonationSites from "./donationsites";
import Filter from "./filter";
import MapContainer from "./map";

// import styles from "./styles.module.scss";

const Distance = () => {
  const { loading, apiClient } = useApi();
  const [origin, setOrigin] = React.useState("");
  const [distance, setDistance] = React.useState([]);
  const [checkedProduct, setCheckedProduct] = React.useState("");

  console.log(checkedProduct);

  const loadDistance = async () =>
    setDistance(await apiClient.getDistance(origin));

  const onSubmit = (e) => {
    e.preventDefault();
    loadDistance();
  };

  return loading ? null : (
    //Row 2 - Search and Filter
    <div class="container-fluid h-75">
      <div class="row p-4 search-row">
        <div class="col text-center align-self-center px-10">
          <div class="form">
            <form {...{ onSubmit }}>
              <label htmlFor="search">
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Search Address or Zipcode..."
                    onChange={(e) => setOrigin(e.currentTarget.value)}
                    value={origin}
                    id="search"
                  />
                  <button class="btn btn-primary">Search</button>
                </div>
              </label>
            </form>
          </div>
        </div>
        <div class="col align-self-center px-10">
          <h4>Filter by Product Type</h4>
          <Filter setCheckedProduct={setCheckedProduct} />
        </div>
      </div>
      {/* Row 3 - results and Map  */}
      <section class="p-0">
        <div class="container-fluid px-0">
          <div class="row g-0">
            <div class="col-md align-items-center nopadding">
              <div class="left boxed-content">
                <DonationSites
                  checkedProduct={checkedProduct}
                  distance={distance}
                />
              </div>
            </div>

            <div class="right col-md-6 col-lg-6 col-xs-12 boxed-content nopadding">
              <MapContainer distance={distance} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distance;
