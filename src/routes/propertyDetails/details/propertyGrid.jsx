import React, { Component } from "react";

import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as apiCallCreator from "Redux/propertyDetails/_axios";
import * as actionCreator from "Redux/propertyDetails/actions";
import {
  FORM_VIEW,
  FORM_EDIT,
  PROPERTY_GRID,
  LIEN_GRID,
  ASSESSEE_GRID
} from "Constants/actionTypes";

class PropertyGrid extends Component {
  componentWillMount() {
    apiCallCreator.getPropertyData(0, 10, this.props.getPropertyDatas);
    apiCallCreator.getAssesseeData(0, 10, this.props.getAssesseeDatas);
    apiCallCreator.getLienData(0, 10, this.props.getLienDatas);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to="/app/propertyDetails/detailsform" />;
    }
  };

  setEditRedirect = val => {
    this.props.changeFormType(FORM_EDIT);
    this.props.loader();
    this.props.selectProperty(val);
    this.setState({
      redirect: true
    });
  };

  setViewRedirect = val => {
    this.props.changeFormType(FORM_VIEW);
    this.props.loader();
    this.props.selectProperty(val);
    this.setState({
      redirect: true
    });
  };

  setColumn = () => {
    if (this.props.propertyDetails.gridType == PROPERTY_GRID) {
      return this.state.propertyColumn;
    }
    if (this.props.propertyDetails.gridType == LIEN_GRID) {
      return this.state.lienColumn;
    }
    if (this.props.propertyDetails.gridType == ASSESSEE_GRID) {
      return this.state.assesseeColumn;
    }
    return this.state.propertyColumn;
  };

  render() {
    console.log(this.props);
    return (
      <Row>
        <Colxx xxs="12" className="mb-3">
          <Card className="d-flex flex-row">
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <ReactTable
                  className="w-100"
                  data={this.props.propertyDetails.selectedGridData.docs}
                  columns={this.setColumn()}
                  pages={this.setPageSize()}
                  noDataText={"No Records Found !"}
                  defaultPageSize={10}
                  showPageSizeOptions={true}
                  PaginationComponent={DataTablePagination}
                  defaultFilterMethod={(filter, row) => {
                    return row[filter.id]
                      .toLowerCase()
                      .includes(filter.value.toLowerCase());
                  }}
                  manual
                  onFetchData={(state, instance) => {
                    this.setState({
                      pageSize: state.pageSize
                    });
                    if (this.props.propertyDetails.gridType == PROPERTY_GRID) {
                      apiCallCreator.getPropertyData(
                        state.page,
                        state.pageSize,
                        this.props.getPropertyDatas
                      );
                    }
                    if (this.props.propertyDetails.gridType == LIEN_GRID) {
                      apiCallCreator.getLienData(
                        state.page,
                        state.pageSize,
                        this.props.getLienDatas
                      );
                    }
                    if (this.props.propertyDetails.gridType == ASSESSEE_GRID) {
                      apiCallCreator.getAssesseeData(
                        state.page,
                        state.pageSize,
                        this.props.getAssesseeDatas
                      );
                    }
                  }}
                />
              </div>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }

  setPageSize = () => {
    return Math.ceil(
      this.props.propertyDetails.selectedGridData.total / this.state.pageSize
    );
  };

  state = {
    pageSize: 10,
    redirect: false,
    selectedColumn: [],
    propertyColumn: [
      {
        Header: "Property Number",
        accessor: "propertyNumber",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        },
        Cell: props => {
          return props.value.toUpperCase();
        }
      },
      {
        Header: "Address",
        accessor: "address",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Assessed Value",
        accessor: "assessedValue",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Market Value",
        accessor: "marketValue",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Taxes Per Year",
        accessor: "taxesPerYear",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "",
        Cell: props => {
          return (
            <ButtonGroup className="m-auto">
              {this.renderRedirect()}
              <Button
                outline
                color="primary"
                size="sm"
                onClick={() => this.setViewRedirect(props.original)}
              >
                <IntlMessages id="property.viewbtn" />
              </Button>
              <Button
                outline
                color="secondary"
                size="sm"
                onClick={() => this.setEditRedirect(props.original)}
              >
                <IntlMessages id="property.editbtn" />
              </Button>
            </ButtonGroup>
          );
        }
      }
    ],
    lienColumn: [
      {
        Header: "Property Number",
        accessor: "propertyNumber",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        },
        Cell: props => {
          return props.value.toUpperCase();
        }
      },
      {
        Header: "Creditor",
        accessor: "creditor",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Amount",
        accessor: "amount",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Payment Amount",
        accessor: "paymentAmount",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "",
        Cell: props => {
          return (
            <ButtonGroup className="m-auto">
              {this.renderRedirect()}
              <Button
                outline
                color="primary"
                size="sm"
                onClick={() => {
                  let data = { ...props.original };
                  data._id = props.original.property_id;
                  this.setViewRedirect(data);
                }}
              >
                <IntlMessages id="property.viewbtn" />
              </Button>
              <Button
                outline
                color="secondary"
                size="sm"
                onClick={() => {
                  let data = { ...props.original };
                  data._id = props.original.property_id;
                  this.setEditRedirect(data);
                }}
              >
                <IntlMessages id="property.editbtn" />
              </Button>
            </ButtonGroup>
          );
        }
      }
    ],
    assesseeColumn: [
      {
        Header: "Property Number",
        accessor: "propertyNumber",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        },
        Cell: props => {
          return props.value.toUpperCase();
        }
      },
      {
        Header: "Name",
        accessor: "name",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "Phone Number",
        accessor: "cellPhone",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "E-mail",
        accessor: "emailAddress",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "State",
        accessor: "state",
        sortable: true,
        filterable: true,
        style: {
          margin: "auto"
        }
      },
      {
        Header: "",
        Cell: props => {
          return (
            <ButtonGroup className="m-auto">
              {this.renderRedirect()}
              <Button
                outline
                color="primary"
                size="sm"
                onClick={() => {
                  let data = { ...props.original };
                  data._id = props.original.property_id;
                  this.setViewRedirect(data);
                }}
              >
                <IntlMessages id="property.viewbtn" />
              </Button>
              <Button
                outline
                color="secondary"
                size="sm"
                onClick={() => {
                  let data = { ...props.original };
                  data._id = props.original.property_id;
                  this.setEditRedirect(data);
                }}
              >
                <IntlMessages id="property.editbtn" />
              </Button>
            </ButtonGroup>
          );
        }
      }
    ]
  };
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getPropertyDatas: val => dispatch(actionCreator.GetPropertyData(val)),
    getAssesseeDatas: val => dispatch(actionCreator.GetAssesseeData(val)),
    getLienDatas: val => dispatch(actionCreator.GetLienData(val)),
    selectProperty: val => dispatch(actionCreator.SelectedData(val)),
    changeFormType: val => dispatch(actionCreator.ChangeFormType(val)),
    loader: () => dispatch(actionCreator.LoaderState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyGrid);
