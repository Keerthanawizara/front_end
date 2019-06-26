import React, { Component, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import {
  Row,
  Button,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  FormGroup,
  Nav,
  NavItem,
  Input,
  InputGroupAddon,
  InputGroup,
  TabContent,
  TabPane,
  Label
} from "reactstrap";

import classnames from "classnames";
import { NavLink } from "react-router-dom";

import * as Yup from "yup";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

import { Redirect } from "react-router-dom";
import ReactAutosuggest from "Components/ReactAutosuggest";
import { NotificationManager } from "Components/ReactNotifications";

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";
import { FORM_ADD, FORM_VIEW, FORM_EDIT } from "Constants/actionTypes";

import Communication from "./communication";
import Escrow from "./escrow";
import Tax from "./tax";

class DetailsForm extends Component {
  componentWillMount() {
    if (
      this.props.propertyDetails.formType == FORM_VIEW ||
      this.props.propertyDetails.formType == FORM_EDIT
    ) {
      apiCallCreator.getDetails(
        this.props.propertyDetails.id,
        this.props.propertyDetails.propertyNumber,
        this.props.singleRecordData
      );
    }
  }

  render() {
    const pdprops = this.props.propertyDetails;
    return pdprops.loading == true ? (
      <div className="loading" />
    ) : (
      <div>
        <Row>
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                {pdprops.propertyNumber != ""
                  ? "Property Number : " + pdprops.propertyNumber
                  : "ADD NEW"}
              </h1>

              <div className="float-sm-right">
                {pdprops.formType != FORM_ADD ? (
                  <div className="float-sm-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        color="primary"
                        size="lg"
                        outline
                        className="top-right-button top-right-button-single"
                      >
                        <IntlMessages id="pages.actions" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => this.props.changeFormType(FORM_VIEW)}
                        >
                          <IntlMessages id="property.viewDetails" />
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.props.changeFormType(FORM_EDIT)}
                        >
                          <IntlMessages id="property.editDetails" />
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                ) : (
                  ""
                )}
                {"  "}
              </div>
            </div>
          </Colxx>
        </Row>
        <Nav tabs className="separator-tabs ml-0 mb-5 ">
          <NavItem className="text-center">
            <NavLink
              className={classnames({
                active: this.state.activeFirstTab === "1",
                "nav-link": true
              })}
              to="#"
              onClick={() => {
                if (pdprops.formType != FORM_ADD) {
                  this.toggleFirstTab("1");
                }
              }}
            >
              Property Details
            </NavLink>
          </NavItem>
          <NavItem className="text-center">
            <NavLink
              className={classnames({
                active: this.state.activeFirstTab === "2",
                "nav-link": true
              })}
              to="#"
              onClick={() => {
                if (pdprops.formType != FORM_ADD) {
                  this.toggleFirstTab("2");
                }
              }}
            >
              Lien Info
            </NavLink>
          </NavItem>
          <NavItem className="text-center">
            <NavLink
              className={classnames({
                active: this.state.activeFirstTab === "3",
                "nav-link": true
              })}
              to="#"
              onClick={() => {
                if (pdprops.formType != FORM_ADD) {
                  this.toggleFirstTab("3");
                }
              }}
            >
              Assessee
            </NavLink>
          </NavItem>
          <NavItem className="text-center">
            <NavLink
              className={classnames({
                active: this.state.activeFirstTab === "4",
                "nav-link": true
              })}
              to="#"
              onClick={() => {
                if (pdprops.formType != FORM_ADD) {
                  this.toggleFirstTab("4");
                }
              }}
            >
              Dates
            </NavLink>
          </NavItem>
          {pdprops.formType === FORM_VIEW ? (
            <Fragment>
              <NavItem className="text-center">
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "5",
                    "nav-link": true
                  })}
                  to="#"
                  onClick={() => {
                    if (pdprops.formType != FORM_ADD) {
                      this.toggleFirstTab("5");
                    }
                  }}
                >
                  Escrow Activity
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "6",
                    "nav-link": true
                  })}
                  to="#"
                  onClick={() => {
                    if (pdprops.formType != FORM_ADD) {
                      this.toggleFirstTab("6");
                    }
                  }}
                >
                  Tax Details
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink
                  className={classnames({
                    active: this.state.activeFirstTab === "7",
                    "nav-link": true
                  })}
                  to="#"
                  onClick={() => {
                    if (pdprops.formType != FORM_ADD) {
                      this.toggleFirstTab("7");
                    }
                  }}
                >
                  Communication
                </NavLink>
              </NavItem>
            </Fragment>
          ) : (
            ""
          )}
        </Nav>

        <TabContent activeTab={this.state.activeFirstTab}>
          <TabPane tabId="1">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      pin: pdprops.propertyDetails.pin,
                      county: pdprops.propertyDetails.county,
                      address: pdprops.propertyDetails.address,
                      city: pdprops.propertyDetails.city,
                      state: pdprops.propertyDetails.state,
                      zip: pdprops.propertyDetails.zip,
                      townShip: pdprops.propertyDetails.townShip,
                      classCode: pdprops.propertyDetails.classCode,
                      assessedValue: pdprops.propertyDetails.assessedValue,
                      marketValue: pdprops.propertyDetails.marketValue,
                      taxesPerYear: pdprops.propertyDetails.taxesPerYear,
                      preeqexm: pdprops.propertyDetails.preeqexm,
                      homeOwners: pdprops.propertyDetails.homeOwners,
                      seniorExemption: pdprops.propertyDetails.seniorExemption,
                      seniorFreeze: pdprops.propertyDetails.seniorFreeze,
                      totalAcres: pdprops.propertyDetails.totalAcres,
                      legalDescription:
                        pdprops.propertyDetails.legalDescription,
                      googleMapView: pdprops.propertyDetails.googleMapView
                    }}
                    validationSchema={propertyDetailsSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        values.county = this.state.county;
                        values.city = this.state.city;
                        values.state = this.state.state;
                        this.setState({
                          county: "",
                          city: "",
                          state: ""
                        });
                        this.props.loader();
                        apiCallCreator.addPropertyDetails(
                          values,
                          this.props.addNewProperty
                        );
                        this.toggleFirstTab("2");
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        values.county =
                          this.state.county != ""
                            ? this.state.county
                            : pdprops.propertyDetails.county;
                        values.city =
                          this.state.city != ""
                            ? this.state.city
                            : pdprops.propertyDetails.city;
                        values.state =
                          this.state.state != ""
                            ? this.state.state
                            : pdprops.propertyDetails.state;
                        apiCallCreator.editPropertyDetails(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber,
                          this.createNotification(val)
                        );
                        this.toggleFirstTab("2");
                      }
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.propertyDetailMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <div className="text-center">
                            <Button
                              className="mb-2 w-25"
                              type="submit"
                              size="lg"
                              color="primary"
                            >
                              <IntlMessages id="property.saveandproceed" />
                            </Button>
                            {pdprops.formType === FORM_EDIT ? (
                              <Fragment>
                                <p
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleSubmit();
                                    setTimeout(() => {
                                      this.props.history.push(
                                        "/app/propertyDetails/details"
                                      );
                                    }, 500);
                                  }}
                                >
                                  <IntlMessages id="property.iamdone" />
                                </p>
                              </Fragment>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          <div className="text-center">
                            <Button
                              className="w-25"
                              color="secondary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("2")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: pdprops.propertyNumber,
                      creditor: pdprops.lienDetails.creditor,
                      amount: pdprops.lienDetails.amount,
                      paymentAmount: pdprops.lienDetails.paymentAmount
                    }}
                    validationSchema={lienSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        this.toggleFirstTab("3");
                        apiCallCreator.addLien(values, this.props.addNewLien);
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editLien(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.toggleFirstTab("3");
                      }
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.lienInfoMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <div className="text-center">
                            {pdprops.formType === FORM_ADD ? (
                              <Button
                                className="w-25"
                                size="lg"
                                color="secondary"
                                onClick={() => {
                                  let data = { ...pdprops.lienDetails };
                                  data.propertyNumber = pdprops.propertyNumber;
                                  apiCallCreator.addLien(
                                    data,
                                    this.props.addNewLien
                                  );
                                  this.toggleFirstTab("3");
                                }}
                              >
                                <IntlMessages id="property.skip" />
                              </Button>
                            ) : (
                              ""
                            )}
                            <Button
                              className="mb-2 w-25"
                              type="submit"
                              size="lg"
                              color="primary"
                            >
                              <IntlMessages id="property.saveandproceed" />
                            </Button>
                            {pdprops.formType === FORM_EDIT ? (
                              <Fragment>
                                <p
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleSubmit();
                                    setTimeout(() => {
                                      this.props.history.push(
                                        "/app/propertyDetails/details"
                                      );
                                    }, 500);
                                  }}
                                >
                                  <IntlMessages id="property.iamdone" />
                                </p>
                              </Fragment>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          <div className="text-center">
                            <Button
                              className="mr-2 w-25"
                              color="primary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("1")}
                            >
                              <IntlMessages id="property.previous" />
                            </Button>
                            <Button
                              className="w-25"
                              color="secondary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("3")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: pdprops.propertyNumber,
                      name: pdprops.assesseeDetails.name,
                      street: pdprops.assesseeDetails.street,
                      city: pdprops.assesseeDetails.city,
                      state: pdprops.assesseeDetails.state,
                      zip: pdprops.assesseeDetails.zip,
                      emailAddress: pdprops.assesseeDetails.emailAddress,
                      cellPhone: pdprops.assesseeDetails.cellPhone
                    }}
                    validationSchema={assesseeSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        values.state = this.state.state;
                        values.city = this.state.city;
                        apiCallCreator.addAssessee(
                          values,
                          this.props.addNewAssessee
                        );
                        this.toggleFirstTab("4");
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        values.state =
                          this.state.state != ""
                            ? this.state.state
                            : pdprops.assesseeDetails.state;
                        values.city =
                          this.state.city != ""
                            ? this.state.city
                            : pdprops.assesseeDetails.city;
                        this.setState({
                          state: "",
                          city: ""
                        });
                        apiCallCreator.editAssessee(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.toggleFirstTab("4");
                      }
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.assesseeMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <div className="text-center">
                            {pdprops.formType === FORM_ADD ? (
                              <Button
                                className="w-25"
                                size="lg"
                                color="secondary"
                                onClick={() => {
                                  let data = { ...pdprops.assesseeDetails };
                                  data.propertyNumber = pdprops.propertyNumber;
                                  apiCallCreator.addAssessee(
                                    data,
                                    this.props.addNewAssessee
                                  );
                                  this.toggleFirstTab("4");
                                }}
                              >
                                <IntlMessages id="property.skip" />
                              </Button>
                            ) : (
                              ""
                            )}
                            <Button
                              className="mb-2 w-25"
                              type="submit"
                              size="lg"
                              color="primary"
                            >
                              <IntlMessages id="property.saveandproceed" />
                            </Button>
                            {pdprops.formType === FORM_EDIT ? (
                              <Fragment>
                                <p
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleSubmit();
                                    setTimeout(() => {
                                      this.props.history.push(
                                        "/app/propertyDetails/details"
                                      );
                                    }, 500);
                                  }}
                                >
                                  <IntlMessages id="property.iamdone" />
                                </p>
                              </Fragment>
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          <div className="text-center">
                            <Button
                              className="mr-2 w-25"
                              color="primary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("2")}
                            >
                              <IntlMessages id="property.previous" />
                            </Button>
                            <Button
                              className="w-25"
                              color="secondary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("4")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Formik
                    initialValues={{
                      propertyNumber: pdprops.propertyNumber,
                      actualEstimatedDate:
                        pdprops.datesDetails.actualEstimatedDate,
                      firstInstallmentDate:
                        pdprops.datesDetails.firstInstallmentDate,
                      secondInstallmentDate:
                        pdprops.datesDetails.secondInstallmentDate,
                      petitionFiledDate: pdprops.datesDetails.petitionFiledDate,
                      extentionDate: pdprops.datesDetails.extentionDate,
                      expirationDate: pdprops.datesDetails.expirationDate,
                      assignmentCallDate:
                        pdprops.datesDetails.assignmentCallDate,
                      proveUpDate: pdprops.datesDetails.proveUpDate,
                      orderOfDate: pdprops.datesDetails.orderOfDate,
                      dateOfTaxDeed: pdprops.datesDetails.dateOfTaxDeed
                    }}
                    validationSchema={dateSchema}
                    onSubmit={values => {
                      if (pdprops.formType == FORM_ADD) {
                        apiCallCreator.addImportantDate(
                          values,
                          this.props.addNewDates
                        );
                        this.setRedirect();
                      }
                      if (pdprops.formType == FORM_EDIT) {
                        apiCallCreator.editImportantDate(
                          values,
                          pdprops.id,
                          pdprops.propertyNumber
                        );
                        this.setRedirect();
                      }
                    }}
                  >
                    {({ errors, touched, handleSubmit }) => (
                      <Form>
                        <Row>
                          {this.fieldMapper(
                            this.state.datesMap,
                            errors,
                            touched,
                            pdprops.fieldDisable
                          )}
                        </Row>
                        {pdprops.formType === FORM_ADD ||
                        pdprops.formType === FORM_EDIT ? (
                          <div>
                            {this.renderRedirect()}
                            <div className="text-center">
                              {pdprops.formType === FORM_ADD ? (
                                <Button
                                  className="w-25"
                                  size="lg"
                                  color="secondary"
                                  onClick={() => {
                                    let data = { ...pdprops.datesDetails };
                                    data.propertyNumber =
                                      pdprops.propertyNumber;
                                    apiCallCreator.addImportantDate(
                                      data,
                                      this.props.addNewDates
                                    );
                                    this.setRedirect();
                                  }}
                                >
                                  <IntlMessages id="property.skip" />
                                </Button>
                              ) : (
                                ""
                              )}
                              <Button
                                className="mb-2 w-25"
                                type="submit"
                                size="lg"
                                color="primary"
                              >
                                <IntlMessages id="property.saveandproceed" />
                              </Button>
                              {pdprops.formType === FORM_EDIT ? (
                                <Fragment>
                                  <p
                                    className="cursor-pointer"
                                    onClick={() => {
                                      handleSubmit();
                                      setTimeout(() => {
                                        this.props.history.push(
                                          "/app/propertyDetails/details"
                                        );
                                      }, 500);
                                    }}
                                  >
                                    <IntlMessages id="property.iamdone" />
                                  </p>
                                </Fragment>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center">
                            <Button
                              className="mr-2 w-25"
                              color="primary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("3")}
                            >
                              <IntlMessages id="property.previous" />
                            </Button>
                            <Button
                              className="w-25"
                              color="secondary"
                              size="lg"
                              onClick={() => this.toggleFirstTab("5")}
                            >
                              <IntlMessages id="property.next" />
                            </Button>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Row>
                    <Escrow />
                  </Row>
                  <div className="text-center mt-2">
                    <Button
                      className="mr-2 w-25"
                      color="primary"
                      size="lg"
                      onClick={() => this.toggleFirstTab("4")}
                    >
                      <IntlMessages id="property.previous" />
                    </Button>
                    <Button
                      className="w-25"
                      color="secondary"
                      size="lg"
                      onClick={() => this.toggleFirstTab("6")}
                    >
                      <IntlMessages id="property.next" />
                    </Button>
                  </div>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Colxx sm="12">
                <CardBody>
                  <Tax />
                  <div className="text-center mt-2">
                    <Button
                      className="mr-2 w-25"
                      color="primary"
                      size="lg"
                      onClick={() => this.toggleFirstTab("5")}
                    >
                      <IntlMessages id="property.previous" />
                    </Button>
                    <Button
                      className="w-25"
                      color="secondary"
                      size="lg"
                      onClick={() => this.toggleFirstTab("7")}
                    >
                      <IntlMessages id="property.next" />
                    </Button>
                  </div>
                </CardBody>
              </Colxx>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <CardBody>
                <Communication
                  selectedData={this.state.communicationData}
                  selectedAttachment={this.state.communicationAlert}
                />
                <div className="text-center">
                  <Button
                    className="mt-2 w-25"
                    color="primary"
                    size="lg"
                    onClick={() => this.toggleFirstTab("6")}
                  >
                    <IntlMessages id="property.previous" />
                  </Button>
                </div>
              </CardBody>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  createNotification = (type, className) => {
    let cName = className || "";
    return () => {
      switch (type) {
        case "primary":
          NotificationManager.primary(
            "This is a notification!",
            "Primary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "secondary":
          NotificationManager.secondary(
            "This is a notification!",
            "Secondary Notification",
            3000,
            null,
            null,
            cName
          );
          break;
        case "info":
          NotificationManager.info("Info message", "", 3000, null, null, cName);
          break;
        case "success":
          NotificationManager.success(
            "Success message",
            "Title here",
            3000,
            null,
            null,
            cName
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000,
            null,
            null,
            cName
          );
          break;
        case "error":
          NotificationManager.error(
            "Error message",
            "Click me!",
            5000,
            () => {
              alert("callback");
            },
            null,
            cName
          );
          break;
        default:
          NotificationManager.info("Info message");
          break;
      }
    };
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to="/app/propertyDetails/details" />;
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      activeFirstTab: "1",
      county: "",
      city: "",
      state: "",

      communicationAlert: [
        { fileName: "property.pdf" },
        { fileName: "assessee.pdf" },
        { fileName: "petition.pdf" }
      ],
      communicationData: [
        {
          timestamp: "20/12/2019 9:00",
          alertType: "Email",
          contact: "sam@gmail.com",
          description: "None"
        },
        {
          timestamp: "22/12/2019 9:00",
          alertType: "Text",
          contact: "15417543010",
          description: "Auto Payment Alert"
        }
      ],

      selectedProperty: {},
      selectedLien: {},
      selectedAssessee: {},
      selectedDates: {},

      propertyDetailMap: [
        { name: "pin", size: 4, type: "number", text: "property." },
        { name: "address", size: 4, type: "text", text: "property." },
        {
          name: "city",
          size: 4,
          type: "autoSuggest",
          text: "property.",
          data: this.props.propertyDetails.cityJson
        },
        {
          name: "county",
          size: 4,
          type: "autoSuggest",
          text: "property.",
          data: this.props.propertyDetails.countyJson
        },
        {
          name: "state",
          size: 4,
          type: "autoSuggest",
          text: "property.",
          data: this.props.propertyDetails.stateJson
        },
        { name: "zip", size: 4, type: "number", text: "property." },
        { name: "townShip", size: 4, type: "text", text: "property." },
        { name: "classCode", size: 4, type: "number", text: "property." },
        {
          name: "assessedValue",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "marketValue",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "taxesPerYear",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "preeqexm",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "homeOwners",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "seniorExemption",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        {
          name: "seniorFreeze",
          size: 4,
          type: "number",
          text: "property.",
          currency: true
        },
        { name: "totalAcres", size: 4, type: "number", text: "property." },
        { name: "legalDescription", size: 4, type: "text", text: "property." },
        { name: "googleMapView", size: 4, type: "text", text: "property." }
      ],
      lienInfoMap: [
        {
          name: "creditor",
          size: 4,
          type: "text",
          text: "lien."
        },
        {
          name: "amount",
          size: 4,
          type: "number",
          text: "lien.",
          currency: true
        },
        {
          name: "paymentAmount",
          size: 4,
          type: "number",
          text: "lien.",
          currency: true
        }
      ],
      assesseeMap: [
        { name: "name", size: 4, type: "text", text: "assessee." },
        { name: "cellPhone", size: 4, type: "number", text: "assessee." },
        { name: "emailAddress", size: 4, type: "text", text: "assessee." },
        { name: "street", size: 4, type: "text", text: "assessee." },
        {
          name: "city",
          size: 4,
          type: "autoSuggest",
          text: "assessee.",
          data: this.props.propertyDetails.cityJson
        },
        {
          name: "state",
          size: 4,
          type: "autoSuggest",
          text: "assessee.",
          data: this.props.propertyDetails.stateJson
        },
        { name: "zip", size: 4, type: "number", text: "assessee." }
      ],
      datesMap: [
        { name: "actualEstimatedDate", size: 4, type: "date", text: "dates." },
        { name: "firstInstallmentDate", size: 4, type: "date", text: "dates." },
        {
          name: "secondInstallmentDate",
          size: 4,
          type: "date",
          text: "dates."
        },
        { name: "petitionFiledDate", size: 4, type: "date", text: "dates." },
        { name: "extentionDate", size: 4, type: "date", text: "dates." },
        { name: "expirationDate", size: 4, type: "date", text: "dates." },
        { name: "assignmentCallDate", size: 4, type: "date", text: "dates." },
        { name: "proveUpDate", size: 4, type: "date", text: "dates." },
        { name: "orderOfDate", size: 4, type: "date", text: "dates." },
        { name: "dateOfTaxDeed", size: 4, type: "date", text: "dates." }
      ]
    };
  }

  toggleFirstTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  }

  fieldMapper = (arr, errors, touched, fieldStatus) => {
    return arr.map((e, i) => {
      if (
        e.type == "autoSuggest" &&
        this.props.propertyDetails.formType != FORM_VIEW
      ) {
        let initial =
          e.text == "assessee."
            ? this.props.propertyDetails.assesseeDetails[e.name]
            : this.props.propertyDetails.propertyDetails[e.name];
        return (
          <Colxx key={i} xxs={e.size}>
            <FormGroup className="form-group has-top-label">
              <Label>
                <IntlMessages id={e.text + e.name} />
              </Label>
              <ReactAutosuggest
                initialValue={initial}
                placeholder={"Select " + e.name}
                data={e.data}
                disabledStatus={fieldStatus}
                onChange={value => {
                  this.setState({ [e.name]: value });
                }}
              />
            </FormGroup>
          </Colxx>
        );
      } else {
        return (
          <Colxx key={i} xxs={e.size}>
            <FormGroup
              className={
                "form-group has-top-label" +
                (errors[e.name] && touched[e.name] ? " border-danger m-0" : "")
              }
            >
              {!e.currency ? (
                <Fragment>
                  <Field
                    className={
                      "form-control" +
                      (errors[e.name] && touched[e.name]
                        ? " border-danger"
                        : "")
                    }
                    type={e.type}
                    name={e.name}
                    disabled={
                      (this.props.propertyDetails.formType == FORM_EDIT &&
                        e.name == "pin") ||
                      (this.props.propertyDetails.formType == FORM_EDIT &&
                        e.name == "county" &&
                        this.state.activeFirstTab == "1")
                        ? true
                        : fieldStatus
                    }
                  />
                  <Label
                    className={
                      errors[e.name] && touched[e.name] ? "text-danger" : ""
                    }
                  >
                    <IntlMessages id={e.text + e.name} />
                  </Label>
                </Fragment>
              ) : (
                <Fragment>
                  <Field
                    name={e.name}
                    render={({ field }) => (
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input
                          {...field}
                          type={e.type}
                          disabled={fieldStatus}
                          className={
                            "form-control" +
                            (errors[e.name] && touched[e.name]
                              ? " border-danger"
                              : "")
                          }
                        />
                      </InputGroup>
                    )}
                  />
                  <Label
                    className={
                      errors[e.name] && touched[e.name]
                        ? "text-danger custom-left"
                        : "custom-left"
                    }
                  >
                    <IntlMessages id={e.text + e.name} />
                  </Label>
                </Fragment>
              )}

              {errors[e.name] && touched[e.name] ? (
                <small className="text-danger">{errors[e.name]}</small>
              ) : (
                ""
              )}
            </FormGroup>
          </Colxx>
        );
      }
    });
  };
}

const propertyDetailsSchema = Yup.object().shape({
  //county: Yup.string().required("Required"),
  pin: Yup.number()
    .test(
      "len",
      "pin must be between 9 to 14 Digits",
      (val = "0") => val.toString().length >= 9 && val.toString().length <= 14
    )
    .required("Required"),
  address: Yup.string().required("Required"),
  //city: Yup.string().required("Required"),
  //state: Yup.string().required("Required"),
  zip: Yup.number()
    .test(
      "len",
      "Zip Code must be between 5 to 6 Digits",
      (val = "0") => val.toString().length >= 5 && val.toString().length <= 6
    )
    .required("Required"),
  townShip: Yup.string().required("Required"),
  classCode: Yup.number().required("Required"),
  assessedValue: Yup.number().required("Required"),
  marketValue: Yup.number().required("Required"),
  taxesPerYear: Yup.number().required("Required"),
  preeqexm: Yup.number().required("Required"),
  homeOwners: Yup.number().required("Required"),
  seniorExemption: Yup.number().required("Required"),
  seniorFreeze: Yup.number().required("Required"),
  totalAcres: Yup.number().required("Required"),
  legalDescription: Yup.string().required("Required"),
  googleMapView: Yup.string().required("Required")
});

const lienSchema = Yup.object().shape({
  creditor: Yup.string().required("Required"),
  amount: Yup.number().required("Required"),
  paymentAmount: Yup.number().required("Required")
});

const assesseeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  //city: Yup.string().required("Required"),
  //state: Yup.string().required("Required"),
  zip: Yup.number()
    .test(
      "len",
      "Zip Code must be between 5 to 6 Digits",
      (val = "0") => val.toString().length >= 5 && val.toString().length <= 6
    )
    .required("Required"),
  emailAddress: Yup.string().email("Please provide valid email"),
  cellPhone: Yup.number()
    .test(
      "len",
      "Phone Number must be between 10 to 11 Digits",
      (val = "0") => val.toString().length >= 10 && val.toString().length <= 11
    )
    .required("Required")
});

const dateSchema = Yup.object().shape({
  actualEstimatedDate: Yup.string().required("Required"),
  firstInstallmentDate: Yup.string().required("Required"),
  secondInstallmentDate: Yup.string().required("Required"),
  petitionFiledDate: Yup.string().required("Required"),
  extentionDate: Yup.string().required("Required"),
  expirationDate: Yup.string().required("Required"),
  assignmentCallDate: Yup.string().required("Required"),
  proveUpDate: Yup.string().required("Required"),
  orderOfDate: Yup.string().required("Required"),
  dateOfTaxDeed: Yup.string().required("Required")
});

const mapStateToProps = state => {
  return { propertyDetails: state.propertyDetails };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProperty: val => dispatch(actionCreator.AddNewPropertyDetails(val)),
    addNewAssessee: () => dispatch(actionCreator.AddNewAssessee()),
    addNewLien: () => dispatch(actionCreator.AddNewLien()),
    addNewDates: () => dispatch(actionCreator.AddNewImportantDates()),
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val)),
    singleRecordData: val => dispatch(actionCreator.SingleRecordData(val)),
    loader: () => dispatch(actionCreator.LoaderState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsForm);
