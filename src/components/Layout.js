import React, { PureComponent } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
