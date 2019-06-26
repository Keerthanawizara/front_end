import React, { Component, Fragment } from "react";
import {
  Row,
  Card,
  CardBody,
  CardText,
  Button,
  CardSubtitle
} from "reactstrap";
import ThumbnailLetters from "Components/ThumbnailLetters";
import { Colxx } from "Components/CustomBootstrap";
import { NavLink } from "react-router-dom";

export default class ContentDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedOptions: [],
      userName: "Michel Karthey"
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx md="6" sm="6" lg="4" xxs="12">
            <Card className="profile-left">
              <CardBody>
                <div className="text-center">
                  <ThumbnailLetters
                    rounded
                    top
                    text={this.state.userName}
                    className="m-auto"
                  />
                  <NavLink to="/app/pages/custom">
                    <CardSubtitle className="mb-1 mt-4 font-weight-bold">
                      {this.state.userName}
                    </CardSubtitle>
                  </NavLink>
                  <CardText className="text-muted text-small mb-4">
                    Executive Director
                  </CardText>
                  <CardText className="mb-4 font-weight-bold">
                    Mail Id: michelkarthey@gmail.com{" "}
                  </CardText>
                  <CardText className="mb-4 font-weight-bold">
                    Phone Number: <b> +1-541-754-3010 </b>
                  </CardText>
                  <NavLink to="/app/settings">
                    <Button outline size="sm" color="primary">
                      Edit
                    </Button>
                  </NavLink>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
