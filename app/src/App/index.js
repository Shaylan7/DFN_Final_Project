import * as React from "react";

import { NavLink, Routes, Route } from "react-router-dom";

import AboutPage from "../AboutUs";
import DataVisuals from "../Data";
import Distance from "../Distance";
import Donation from "../Donation";
import Footer from "../Footer/footer";
import useApi from "../auth/useApi";
import useAuth0 from "../auth/useAuth0";
import { Login, Logout, Protected } from "../auth/widgets";

import "../global.css";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const { loading, apiClient } = useApi();

  React.useEffect(() => {
    if (isAuthenticated && !loading) {
      apiClient.addOrUpdateUser(user);
    }
  }, [isAuthenticated, user, loading, apiClient]);

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark navbar-fixed-top">
          <div class="container-fluid">
            <Auth />{" "}
            <button
              class="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  | <NavLink to="donation"> Make a Donation</NavLink>
                </li>
                <li class="nav-item">
                  | <NavLink to="about">About Us </NavLink>
                </li>
                <li class="nav-item">
                  | <NavLink to="data">Donations Tracker </NavLink>
                </li>
                <li class="nav-item">| FAQ </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<DonationForm />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/data" element={<DonationTracker />} />
        </Routes>
      </main>
      <footer>
        <FooterPage />
      </footer>
    </>
  );
};

const Auth = () => {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated ? (
    <>
      Hello, {user.given_name} <Logout />
    </>
  ) : (
    <Login />
  );
};

const FooterPage = () => {
  return (
    <>
      <Footer />
    </>
  );
};

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {/* <header className={styles.header}>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.REACT_APP_SUBTITLE}</p>
      </header> */}
      {isAuthenticated ? <Distance /> : null}
    </>
  );
};

const DonationForm = () => {
  return (
    <>
      <Donation />
    </>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

const DonationTracker = () => {
  return (
    <>
      <DataVisuals />
    </>
  );
};

export default App;
