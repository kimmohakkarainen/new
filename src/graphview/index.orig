import React, { Component } from "react";
import { connect } from "react-redux";

import {
    Alert,
    Button,
    Card,
    Container,
    Row,
    Col,
    Form,
    Spinner
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import Moment from "moment";
import momentLocalizer from "react-widgets-moment";

import { getGraphPreview, fetchGraphPreview, getExcel } from "../actions/";
import TimeRange from "../reportview/timerange";
import Filter from "../reportview/filter";
import { columnsProp } from "../reportview/columnsprop";

/* sankey trial */
import Own from "./sankey"
import Data from "./atozdata";

Moment.locale("fi");
momentLocalizer();

class GraphView extends Component {
    constructor(props) {
        super(props);

        this.onChangeTimeRange = this.onChangeTimeRange.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.postParametersAndGetExcel = this.postParametersAndGetExcel.bind(this);
    }

    onChangeTimeRange(range) {
        const parameters = {
                beginDay: Moment(range.begin).format("YYYY-MM-DD"),
                endDay: Moment(range.end).format("YYYY-MM-DD"),
                customerFilter: this.props.reportview.customerFilter,
                projectFilter: this.props.reportview.projectFilter,
                personFilter: this.props.reportview.personFilter
                /*
                customerOptions: this.props.reportview.customerOptions,
                personOptions: this.props.reportview.personOptions,
                projectOptions: this.props.reportview.projectOptions
                */
        };
        this.props.dispatch(fetchGraphPreview(parameters));
    }

    onChangeFilter(filter) {
        const parameters = {
                beginDay: this.props.reportview.beginDay,
                endDay: this.props.reportview.endDay,
                customerFilter: filter.customerFilter,
                projectFilter: filter.projectFilter,
                personFilter: filter.personFilter
                /* ,
                customerOptions: this.props.reportview.customerOptions,
                personOptions: this.props.reportview.personOptions,
                projectOptions: this.props.reportview.projectOptions
                */
        };
        this.props.dispatch(fetchGraphPreview(parameters));
    }

    postParametersAndGetExcel() {
        const parameters = {
                beginDay: this.props.reportview.beginDay,
                endDay: this.props.reportview.endDay,
                customerFilter: this.props.reportview.customerFilter,
                personFilter: this.props.reportview.personFilter,
                projectFilter: this.props.reportview.projectFilter
        };
        this.props.dispatch(getExcel(parameters));
    }

    componentDidMount() {
        this.props.dispatch(getGraphPreview());
    }

    render() {
        const begin = Moment(this.props.reportview.beginDay).toDate();
        const end = Moment(this.props.reportview.endDay).toDate();
        const preview = this.props.reportview == null || this.props.reportview.nodes== null ? false : true;
        const data = this.props.reportview;
        /* 
        console.log(this.props);
        console.log(data);
        */
        return (
          <div>
              <Card body>
                <strong>Reporting</strong>
              </Card>
             <TimeRange begin={begin} end={end} onChange={this.onChangeTimeRange} />
             <Filter
                value={data}
                onChange={this.onChangeFilter}
                customerOptions={data.customerOptions}
                personOptions={data.personOptions}
                projectOptions={data.projectOptions} />
            <Card >
                <Card.Header>
                    <strong>Preview</strong>
                </Card.Header>
                <Card.Body  >
                <Container>
                { !preview && <Spinner animation="grow" size="lg" /> }
                { preview  && 
                        <Row>
                        <Col className="d-none d-xl-block" style={{ backgroundColor: '#f8f8f8' }} >
                            <Own data={data} width={1100} height={660} edit={false} />
                        </Col>
                        <Col className="d-none d-lg-block d-xl-none" style={{ backgroundColor: '#f0f0f0' }} >
                            <Own data={data} width={900} height={540} edit={false} />
                        </Col>
                        <Col className="d-none d-md-block d-lg-none" style={{ backgroundColor: '#e8e8e8' }} >
                            <Own data={data} width={700} height={420} edit={false} />
                        </Col>
                        <Col className="d-none d-sm-block d-md-none" style={{ backgroundColor: '#e0e0e0' }} >
                            <Own data={data} width={500} height={300} edit={false} />
                        </Col>
                        <Col className="d-xs-block d-sm-none">Graphics can not be displayed. Device too small</Col>
                        </Row>
                }
                </Container>
                </Card.Body>
           </Card>
           <Card body>
              <Button onClick={this.postParametersAndGetExcel}>
                  Generate Excel Report
              </Button>
          </Card>
        </div>
      );
    }
}

function mapStateToProps(state) {
    const props = {
            error: state.error,
            reportview: state.graphview
    };
    return props;
}

export default connect(mapStateToProps)(GraphView);
