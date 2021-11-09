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
        <div class="row mb-5 h-50 w-75 shadow-lg p-3 mb-5 bg-white mx-auto">
          <div class="col-4 form-group form-inline align-self-start">
            <h1>Make a Donation</h1>
            <div class="row mb-4">
              <label>
                Carrier Name:
                <input type="integer" name="carrier_name" />
              </label>
            </div>
            <div class="row mb-4">
              <label>
                Donation Site: <input type="text" name="donation_site_name" />
              </label>
            </div>
            <div class="row mb-4">
              <label>
                Product Owner Name: <input type="text" name="product_owner" />
              </label>
            </div>
            <div class="row mb-4">
              <label htmlFor="healthy">Product Type: </label>
              <select id="product_type_id" name="product_type_id">
                <option value="1">Food</option>
                <option value="2">Consumer Packaged Goods</option>
              </select>
            </div>
            <div class="row mb-4">
              <label>
                Lbs of goods: <input type="integer" name="lbs" />
              </label>
            </div>
            <div class="row mb-4">
              <label>
                Today's Date: <input type="date" name="date" />
              </label>
            </div>
            <div class="row mb-4">
              <button>Submit</button>
            </div>
          </div>
          <div class="col-8">
            <img class="img-fluid" src={img} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Donation;
