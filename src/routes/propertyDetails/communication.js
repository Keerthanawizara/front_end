import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Card, CardBody, Row } from "reactstrap";

import ComGrid from "./communication/comGrid.jsx";

import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

import mouseTrap from "react-mousetrap";

class Communication extends Component {
  render() {
    return (
      <Row>
        <Colxx xxs="8" className="">
          <ComGrid details={this.props.selectedData} />
        </Colxx>
        <Colxx xxs="4" className="">
          <Card className="h-100">
            <CardBody>
              <h4>
                <IntlMessages id="communication.attachments" />
              </h4>
              {this.props.selectedAttachment.map((e, i) => {
                return (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-outline-primary m-1"
                  >
                    {e.fileName + " +"}
                  </button>
                );
              })}
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

export default injectIntl(mouseTrap(Communication));
