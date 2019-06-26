import React, { Component } from "react";

import IntlMessages from "Util/IntlMessages";
import { Row, Card, Button, ButtonGroup } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import ReactTable from "react-table";
import DataTablePagination from "Components/DataTables/pagination";

class Grid extends Component {
    state = {
        propertyColumn: [
            {
                Header: "County",
                accessor: "County",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto",
                }
            },
            {
                Header: "Name",
                accessor: "Name",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
            {
                Header: "Position",
                accessor: "Position",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
            {
                Header: "Address",
                accessor: "Address",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
            {
                Header: "Phone Number",
                accessor: "PhoneNumber",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
            {
                Header: "Email Address",
                accessor: "EmailAddress",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
            {
                Header: "Website",
                accessor: "Website",
                sortable: true,
                filterable: true,
                style: {
                    margin: "auto"
                }
            },
        ]
    }
    render() {
        return (
            <Row>
                <Colxx xxs="12" lg="12" className="mb-3">
                    <Card className="d-flex flex-row w-100 col-sm">
                        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                <ReactTable
                                    className="w-100"
                                    data={this.props.data}
                                    columns={this.state.propertyColumn}
                                    noDataText={"No Records Found !"}
                                    defaultPageSize={10}
                                    showPageSizeOptions={true}
                                    PaginationComponent={DataTablePagination}
                                    defaultFilterMethod={(filter, row) => {
                                        return row[filter.id]
                                            .toLowerCase()
                                            .includes(filter.value.toLowerCase());
                                    }}
                                />
                            </div>
                        </div>
                    </Card>
                </Colxx>
            </Row>
        );
    }
}

export default Grid;