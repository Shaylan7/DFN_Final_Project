import * as React from "react";

import img2 from "./Truck.jpg";
import img from "./aboutimage.jpg";
import CarrierQuotes from "./carrierquotes";

const AboutPage = () => {
  return (
    <div class="pb-4">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="container-fluid px-4 py-5">
          <div class="row align-items-center g-5 py-3">
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">About Us</h1>
              <p>
                Our mission is to reduce waste that happens over the road and
                provide carriers with an easy game plan when often left in the
                dark. Thanks to companies such as
                <strong> Imperfect Foods </strong>and
                <strong> Restaurant Leftover Cuisine</strong>, there are waste
                reducing avenues for food deemed ugly or restaurant overestock.
                However, something we don't talk about enough is the waste that
                happens in transit and will not hit the stock floor of our
                stores or restauarnts.{" "}
              </p>
            </div>

            <div class="col-10 col-sm-8 col-lg-6">
              <img src={img} class="d-block mx-lg-auto img-fluid" />
            </div>
          </div>
          <div class="row align-items-center g-5 py-3">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src={img2} class="d-block mx-lg-auto img-fluid" />
            </div>
            <div class="col-lg-6">
              <p>
                Perfectly good product can be rejected at delivery for a few
                reasons:
              </p>
              <ul>
                <li>
                  Overage. The facility has no room to take the product and it
                  would be dangerous for their facility to unload it.{" "}
                </li>
                <li>
                  Order error. It’s possible the shipper got the order wrong and
                  sent them the wrong product
                </li>
                <li>
                  Slight damage. A shifted pallet or so can cause the product to
                  look unappealing therefore the product is co-signed to
                  dumping.{" "}
                </li>
              </ul>

              <p>
                Time is money for carriers, they need product off their trucks
                as quick as possible. Today, dumping the product is a quick
                solution for both parties. We want to change that
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 mb-7">
        <CarrierQuotes />
      </div>
    </div>
  );
};

export default AboutPage;
