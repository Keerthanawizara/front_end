import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

class EscrowGrid extends Component {
  render() {
    return (
      <ReactTable
        data={this.props.Data}
        TbodyComponent={CustomTbodyComponent}
        columns={this.props.columns}
        defaultPageSize={5}
        showPageJump={false}
        showPageSizeOptions={false}
        showPagination={false}
      />
    );
  }
}

export default EscrowGrid;
