import * as React from "react";

import "./donationform.css";
import useApi from "../auth/useApi";

import img from "./foodbank.jpg";

const Donation = () => {
  const { loading, apiClient } = useApi();
  // const [carrier_name, setCarrierName] = React.useState("");
  // const [donation_site_name, setDonationSiteName] = React.useState("");
  // const [product_owner, setProductOwner] = React.useState("");
  // const [product_type_id, setProductType] = React.useState("");
  // const [lbs, setPounds] = React.useState("");
  // const [date, setDate] = React.useState("");

  const addADonation = async (donation) => apiClient.addDonation(donation);

  //   const canAdd = carrier_name !== "";

  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      carrier_name: { value: carrier_name },
      donation_site_name: { value: donation_site_name },
      product_owner: { value: product_owner },
      product_type_id: { value: product_type_id },
      lbs: { value: lbs },
      date: { value: date },
    } = form.elements;

    e.preventDefault();
    addADonation({
      carrier_name,
      donation_site_name,
      product_owner,
      product_type_id,
      lbs,
      date,
    });
    form.reset();
  };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     if (canAdd) {
  //       addDonation(
  //         carrier_name,
  //         donation_site_name,
  //         product_owner,
  //         product_type_id,
  //         lbs,
  //         date,
  //       );
  //     }
  //   };

  return loading ? null : (
    <div class="container-fluid">
      <form onSubmit={onSubmit}>
        <div class="row mb-5 h-50 w-75 shadow-lg rounded pl-3 mb-5 bg-white mx-auto">
          <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12 pr-5 form-group form-inline align-self-start">
            <div class="pt-3">
              <h1>Make a Donation</h1>
            </div>
            <div class="row mb-3">
              <label class="custom-field" aria-label="Carrier Name">
                <input
                  type="text"
                  name="carrier_name"
                  placeholder="Carrier Name"
                />
              </label>
            </div>
            <div class="row mb-3">
              <label class="custom-field">
                <input
                  type="text"
                  name="donation_site_name"
                  placeholder="Donation Site"
                />
              </label>
            </div>
            <div class="row mb-3">
              <label class="custom-field">
                <input
                  type="text"
                  name="product_owner"
                  placeholder="Product Owner"
                />
              </label>
            </div>
            <div
              class="row dropdown mb-3"
              style={{ width: "50%", marginRight: "0px", marginLeft: "0px" }}
            >
              <label class="custom-field" htmlFor="product_type_id">
                Product Type:{" "}
              </label>
              <select
                class="w-60"
                id="product_type_id"
                name="product_type_id"
                data-size="2"
                style={{ width: "50%" }}
              >
                <option value="1">Food</option>
                <option value="2">Consumer Packaged Goods</option>
              </select>
            </div>
            <div class="row mb-3">
              <label class="custom-field">
                <input type="integer" name="lbs" placeholder="Lbs of Goods" />
              </label>
            </div>
            <div class="row mb-3">
              <label class="custom-field">
                <input type="date" name="date" />
              </label>
            </div>
            <div
              class="row mb-3"
              style={{ width: "50%", marginRight: "0px", marginLeft: "0px" }}
            >
              <button>Submit</button>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 col-md-12 col-xs-12 pr-0 background">
            {/* <img class="img-fluid w-100" syle={{ width: "100%" }} src={img} /> */}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Donation;
