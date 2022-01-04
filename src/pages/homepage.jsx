import React, { Component } from "react";
import NavBar from "../Components/navbar";
import Carousel from "../Components/carousel";
import DownBar from "../Components/downbar";
import Footer from "../Components/footer";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Carousel />
        <DownBar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
