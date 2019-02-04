import React, { Component } from "react";
import { Link, Router } from "../routes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { load, unload } from "../src/actions";

import SmallImage from "../src/assets/images/SmallImage.png";

import {
  Container,
  Header,
  Segment,
  Visibility,
  Button
} from "semantic-ui-react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  routeToProfile = () => {
    this.props.router.push("/profile/123"); // router is in store
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <Visibility>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Container text>
              <Header
                as="h1"
                inverted
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "3em"
                }}
              >
                {message}
              </Header>
              <img src={SmallImage} />
            </Container>
            <Button onClick={this.routeToProfile}>GO TO /PROFILE/123</Button>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    running: state.reducer1.running,
    message: state.reducer2.message
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ load, unload }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
