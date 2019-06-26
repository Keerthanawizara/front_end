import React, { Component, Fragment } from "react";
import { Row, Button, Card, CardBody, Form, Label, Input } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import EscrowGrid from "./escrow/EscrowGrid";
import dataTableData from "./escrow/dataTableData.json";

const dataTableColumns = [
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Bill",
    accessor: "billingCode"
  },
  {
    Header: "Payment",
    accessor: "appPaymentNumber"
  }
];

const dataOutTableColumns = [
  {
    Header: "Date",
    accessor: "date"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Blling Code",
    accessor: "billingCode"
  },
  {
    Header: "Payment To",
    accessor: "paymentTo"
  },
  {
    Header: "Reason",
    accessor: "reason"
  }
];

class Escrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: "328202004boone",
      escrowBalance: "9,000",
      selectedInProperty: [
        {
          amount: "$5,000.00",
          date: "02/01/2019",
          billingCode: "Deposit",
          appPaymentNumber: "1409276011KANE"
        },
        {
          amount: "$5,000.00",
          date: "02/02/2019",
          billingCode: "Deposit",
          appPaymentNumber: "1409276011KANE"
        },
        {
          amount: "$5,000.00",
          date: "12/02/2019",
          billingCode: "Deposit",
          appPaymentNumber: "1409276011KANE"
        },
        {
          amount: "$5,000.00",
          date: "11/02/2019",
          billingCode: "Deposit",
          appPaymentNumber: "1409276011KANE"
        },
        {
          amount: "$5,000.00",
          date: "10/02/2019",
          billingCode: "Deposit",
          appPaymentNumber: "1409276011KANE"
        }
      ],
      selectedOutProperty: [
        {
          amount: "$ 5,000.00 ",
          date: "02/01/2019",
          billingCode: "DEPOSIT",
          paymentTo: "SURE PAY, LLC",
          reason: "Monthly fee"
        },
        {
          amount: "$ 5,000.00 ",
          date: "02/02/2019",
          billingCode: "DEPOSIT",
          paymentTo: "SURE PAY, LLC",
          reason: "Monthly fee"
        },
        {
          amount: "$ 5,000.00 ",
          date: "12/02/2019",
          billingCode: "DEPOSIT",
          paymentTo: "KANE COUNTY",
          reason: "PAYMENT OF TAXES"
        },
        {
          amount: "$ 5,000.00 ",
          date: "11/02/2019",
          billingCode: "DEPOSIT",
          paymentTo: "SURE PAY, LLC",
          reason: "Estimate of Redemption"
        },
        {
          amount: "$ 5,000.00 ",
          date: "10/02/2019",
          billingCode: "DEPOSIT",
          paymentTo: "SURE PAY, LLC",
          reason: "Overnight Mailing"
        }
      ]
    };
  }

  checkProperty = () => {
    event.preventDefault();
    dataTableData.find(e => {
      if (this.state.property == e.propertyNumber) {
        const selectedInProperty = e.dataIn;
        const selectedOutProperty = e.dataOut;
        const escrowBalance = e.EscrowBalance;
        this.setState({
          selectedInProperty,
          selectedOutProperty,
          escrowBalance
        });
        console.log(
          this.state.selectedInProperty,
          this.state.selectedOutProperty,
          escrowBalance
        );
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="6">
            <Card>
              <CardBody>
                <h3>
                  <IntlMessages id="escrow.pay" />
                </h3>
                <Row>
                  <Colxx xxs="4">
                    <Input type="text" name="type" placeholder="Type" />
                  </Colxx>
                  <Colxx xxs="4">
                    <Input type="number" name="amount" placeholder="Amount" />
                  </Colxx>
                  <Colxx xxs="4">
                    <Button color="success" size="lg" className="default">
                      <IntlMessages id="escrow.submit" />
                    </Button>
                  </Colxx>
                </Row>

                <Separator className="mt-2 mb-2" />
                <Row>
                  <Colxx xxs="12">
                    <h3>
                      <IntlMessages id="escrow.ballance" />
                    </h3>
                    <Form>
                      <Row>
                        <Colxx xxs="6">
                          <Label className="form-group has-top-label">
                            <Input
                              type="text"
                              disabled
                              value={this.state.escrowBalance}
                            />
                            <IntlMessages id="escrow.ballance" />
                          </Label>
                        </Colxx>
                        <Colxx xxs="6">
                          <Label className="form-group has-top-label">
                            <Input type="number" />
                            <IntlMessages id="escrow.amount" />
                          </Label>
                        </Colxx>
                      </Row>
                      <Row>
                        <Colxx xxs="6">
                          <Label className="form-group has-top-label">
                            <Input type="date" />
                            <IntlMessages id="escrow.due" />
                          </Label>
                        </Colxx>
                        <Colxx xxs="6">
                          <Label className="form-group has-top-label">
                            <Input type="date" />
                            <IntlMessages id="escrow.pay-day" />
                          </Label>
                        </Colxx>
                      </Row>
                      <Button color="primary">
                        <IntlMessages id="forms.submit" />
                      </Button>
                    </Form>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6">
            <Card className="h-100">
              <CardBody>
                <h3 className="mb-5">
                  <IntlMessages id="escrow.payments-in" />
                </h3>
                <EscrowGrid
                  Data={this.state.selectedInProperty}
                  columns={dataTableColumns}
                />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" className="mt-2">
            <Card className="h-100">
              <CardBody>
                <h3>
                  <IntlMessages id="escrow.payments-in" />
                </h3>

                <EscrowGrid
                  Data={this.state.selectedOutProperty}
                  columns={dataOutTableColumns}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default Escrow;
