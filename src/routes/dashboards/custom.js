import React, { Component, Fragment } from "react";

import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Form,
  FormGroup
} from "reactstrap";
import { Colxx, Separator } from "Components/CustomBootstrap";
import Select from "react-select";

import CountUp from "react-countup";

import PerfectScrollbar from "react-perfect-scrollbar";
import CustomSelectInput from "Components/CustomSelectInput";
import IntlMessages from "Util/IntlMessages";
import { CalendarToolbar } from "Components/Calendar/CalendarToolbar";
import logsData from "Data/logs.json";
import eventsData from "Data/events.json";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import ChartComponent, { Chart } from "react-chartjs-2";
import { barChartDashConfig, lineChartConfig } from "Constants/chartConfig";

import { BarShadow, LineShadow } from "Components/Charts";

const logs = logsData.data;
const localizer = BigCalendar.momentLocalizer(moment);

const selectData = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

const selectDataType = [
  { label: "Cake", value: "cake", key: 0 },
  { label: "Cupcake", value: "cupcake", key: 1 },
  { label: "Dessert", value: "dessert", key: 2 }
];
const events = eventsData.data;

BigCalendar.momentLocalizer(moment);

class custom extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);

    this.state = {
      selectedOptions: [],
      selectedOptionsType: [],
      data: {
        pendingPayments: 18,
        pendingPaymentsThisWeek: 10,
        upcommingRenewals: 32,
        messagesFromClient: 43,
        totalProperties: 25,
        pendingToDOs: 9,
        TotalAssesseeAdded: 28
      }
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChangeType = selectedOptionsType => {
    this.setState({ selectedOptionsType });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.custom" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row className="icon-cards-row mb-2">
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-clock" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.pending-payments" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.pendingPayments}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="simple-icon-login" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.upcomming-renewals" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.upcommingRenewals}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-mail-inbox" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.messages" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.messagesFromClient}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-home-4" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.properties" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.totalProperties}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-check" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.to-do-list" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.pendingToDOs}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-add" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="dashboards.assessee-added" />
                </p>
                <p className="lead text-center">
                  <CountUp
                    duration={3}
                    start={-20}
                    end={this.state.data.TotalAssesseeAdded}
                  />
                </p>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row className="mb-4">
          <Colxx xxs="6">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.bar-chart-title" />
                </CardTitle>
                <CardSubtitle>
                  <IntlMessages id="dashboards.bar-chart-sub-title" />
                </CardSubtitle>
                <div className="chart-container">
                  <BarShadow {...barChartDashConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="6" lg="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.calendar" />
                </CardTitle>
                <BigCalendar
                  localizer={localizer}
                  style={{ minHeight: "500px" }}
                  events={events}
                  views={["month"]}
                  components={{
                    toolbar: CalendarToolbar
                  }}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx lg="12" xl="6">
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={true}
              >
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-clock" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.pending-payments-week" />
                      </p>
                      <p className="lead text-center">
                        <CountUp
                          duration={3}
                          start={-20}
                          end={this.state.data.pendingPaymentsThisWeek}
                        />
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-basket-coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.completed-orders" />
                      </p>
                      <p className="lead text-center">32</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-arrow-refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.refund-requests" />
                      </p>
                      <p className="lead text-center">74</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-mail-read" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.new-comments" />
                      </p>
                      <p className="lead text-center">25</p>
                    </CardBody>
                  </Card>
                </div>
              </ReactSiemaCarousel>
            </div>
          </Colxx>
        </Row>
        {/* <Row>
                            <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4">
                                <Card className="dashboard-search">
                                    <CardBody>
                                        <CardTitle className="text-white">
                                            <IntlMessages id="dashboards.advanced-search" />
                                        </CardTitle>
                                        <Form className="form-container">
                                            <FormGroup>
                                                <label>
                                                    <IntlMessages id="dashboards.toppings" />
                                                </label>
                                                <Select
                                                    components={{ Input: CustomSelectInput }}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    name="form-field-name"
                                                    value={this.state.selectedOption}
                                                    onChange={this.handleChange}
                                                    options={selectData}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <label>
                                                    <IntlMessages id="dashboards.type" />
                                                </label>
                                                <Select
                                                    components={{ Input: CustomSelectInput }}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                    name="form-field-name"
                                                    value={this.state.selectedOptionType}
                                                    onChange={this.handleChangeType}
                                                    options={selectDataType}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    <IntlMessages id="dashboards.keyword" />
                                                </Label>
                                                <Input type="text" placeholder={messages["dashboards.keyword"]} />
                                            </FormGroup>
                                            <FormGroup className="text-center">
                                                <Button color="primary" className="mt-4 pl-5 pr-5">
                                                    <IntlMessages id="dashboards.search" />
                                                </Button>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>

                            </Colxx>
                        </Row> */}

        <Row>
          <Colxx lg="4" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.to-do-list" />
                </CardTitle>
                <div className="dashboard-logs">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    <table className="table table-sm table-borderless">
                      <tbody>
                        {logs.map((log, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <span
                                  className={`log-indicator align-middle ${
                                    log.color
                                  }`}
                                />
                              </td>
                              <td>
                                <span className="font-weight-medium">
                                  {log.label}
                                </span>
                              </td>
                              <td className="text-right">
                                <span className="text-muted">{log.time}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default custom;
