import * as React from "react";

const Footer = () => {
  return (
    <footer class="p5 dark-green-background text-white text-center position-relative">
      <div class="containter-fluid padding">
        <div class="row text-center">
          <div class="col-md-4 p-3">
            <div class="lead">Donate Freight Network</div>
            <hr class="light" />
            <p> 555-989-9056</p>
            <p>donatefreight@gmail.com</p>
            <p>Seattle, WA</p>
          </div>
          <div class="col-md-4 p-3">
            <div class="lead">Connect with Us</div>
            <hr class="light" />
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="fas fa-arrow-circle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
