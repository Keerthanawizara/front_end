import React, { Component, Fragment } from "react";
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import PropertyGrid from "./details/propertyGrid.jsx";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreator from "Redux/propertyDetails/actions";
import {
  FORM_ADD,
  PROPERTY_GRID,
  LIEN_GRID,
  ASSESSEE_GRID
} from "Constants/actionTypes";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  render() {
    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.propertyDetails" />
                </h1>

                <div className="float-sm-right">
                  <div>
                    {this.renderRedirect()}
                    <Button
                      color="success"
                      size="lg"
                      className="default"
                      onClick={this.setRedirect}
                    >
                      <IntlMessages id="property.add-modal-title" />
                    </Button>
                  </div>
                  {"  "}
                </div>

                <BreadcrumbItems match={this.props.match} />
              </div>
              <div className="d-block d-md-inline-block">
                <UncontrolledDropdown className="float-md-left btn-group mb-1">
                  <DropdownToggle caret color="outline-dark" size="xs">
                    <IntlMessages id={this.setSelectedAction()} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => this.props.changeGrid(PROPERTY_GRID)}
                      className={
                        this.props.propertyDetails.gridType == PROPERTY_GRID
                          ? "bg-primary"
                          : ""
                      }
                    >
                      <IntlMessages id="menu.propertyDetails" />
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => this.props.changeGrid(LIEN_GRID)}
                      className={
                        this.props.propertyDetails.gridType == LIEN_GRID
                          ? "bg-primary"
                          : ""
                      }
                    >
                      <IntlMessages id="property.lienInfo" />
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => this.props.changeGrid(ASSESSEE_GRID)}
                      className={
                        this.props.propertyDetails.gridType == ASSESSEE_GRID
                          ? "bg-primary"
                          : ""
                      }
                    >
                      <IntlMessages id="assessee.title" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <Separator className="mb-3" />
            </Colxx>
          </Row>
          <PropertyGrid />
        </div>
      </Fragment>
    );
  }

  setSelectedAction = () => {
    if (this.props.propertyDetails.gridType == PROPERTY_GRID)
      return "menu.propertyDetails";
    if (this.props.propertyDetails.gridType == LIEN_GRID)
      return "property.lienInfo";
    if (this.props.propertyDetails.gridType == ASSESSEE_GRID)
      return "assessee.title";
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to="/app/propertyDetails/detailsform" />;
    }
  };

  setRedirect = () => {
    this.props.changeFormType(FORM_ADD);
    this.setState({
      redirect: true
    });
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val)),
    changeGrid: val => dispatch(actionCreator.ChangeGrid(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);
