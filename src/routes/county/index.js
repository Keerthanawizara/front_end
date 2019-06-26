import React, { Component, Fragment } from 'react';
import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import { Row, Button } from "reactstrap";
import FirstJson from './county_JSON.json';
import Grid from './grid';

class County extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="disable-text-selection">
                    <Row>
                        <Colxx xxs="12">
                            <div className="mb-2">
                                <h1>
                                    <IntlMessages id="county.title" />
                                </h1>

                                <BreadcrumbItems match={this.props.match} />
                            </div>
                            <Separator className="mb-5" />
                        </Colxx>
                    </Row>
                    <Row>
                        <Colxx xxs="12">
                            <Grid
                                data={FirstJson}
                            />
                        </Colxx>
                    </Row>
                </div>
            </Fragment>

        );
    }
}

export default County;