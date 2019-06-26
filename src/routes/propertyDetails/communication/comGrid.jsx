import React, { Component } from "react";
import classnames from "classnames";
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, CardBody, Badge } from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";

class ComGrid extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <ReactTable
            data={this.props.details}
            TbodyComponent={CustomTbodyComponent}
            noDataText={"No Records Found !"}
            columns={dataColumns}
            defaultPageSize={5}
            showPageJump={false}
            showPageSizeOptions={false}
            showPagination={false}
            className={"react-table-fixed-height"}
          />
        </CardBody>
      </Card>
    );
  }
}

export default ComGrid;

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

const dataColumns = [
  {
    Header: "Date/Time",
    accessor: "timestamp"
  },
  {
    Header: "Alert Type",
    accessor: "alertType",
    Cell: props => (
      <Badge color={props.value == "Email" ? "primary" : "secondary"} pill>
        {props.value}
      </Badge>
    )
  },
  {
    Header: "Contact",
    accessor: "contact"
  },
  {
    Header: "Description",
    accessor: "description"
  }
];
