import React, { Component, Fragment } from "react";

import { Row, Card, CardBody } from "reactstrap";
import { Colxx, Separator } from "Components/CustomBootstrap";
import IntlMessages from "Util/IntlMessages";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

class custom extends Component {
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
                <i className="iconsminds-diploma-2" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.fullCertificateJournal" />
                </p>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-library" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.clientEscrowJournal" />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-billing" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.incomeExpenseJournal" />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-file-clipboard-file---text" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.depositJournal" />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-file-clipboard" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.withdrawJournal" />
                </p>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" sm="4" md="3" lg="2">
            <Card className="mb-4">
              <CardBody className="text-center">
                <i className="iconsminds-statistic" />
                <p className="card-text font-weight-semibold mb-0">
                  <IntlMessages id="report.escrowAccountSurePay" />
                </p>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default custom;
