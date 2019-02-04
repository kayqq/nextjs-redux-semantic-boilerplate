// import Link from "next/link";
// import Head from "next/head";
import React, { Component } from "react";

import { Container, Header } from "semantic-ui-react";

class Profile extends Component {
  static async getInitialProps({ query }) {
    console.log(query.id);
    return {};
  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: "2em" }}>
          <Header as="h1">Sticky Example</Header>
          <p>Dynamic routing with next-routes</p>
          <p>/profile/ returns an error page</p>
          <p> /profile/123 returns this page</p>
        </Container>
      </div>
    );
  }
}
export default Profile;
