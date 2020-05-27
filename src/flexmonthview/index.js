import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Card } from "react-bootstrap";

import FlexMonthComponent from "./flexmonthcomponent";
import { fetchPersonFlexSummary } from "../actions";

function FlexMonthView({ fetchPersonFlexSummary, personId, months }) {
  useEffect(() => {
    fetchPersonFlexSummary(0);
  }, [fetchPersonFlexSummary]);

  return (
    <div>
      <Card>
        <Card.Header>
          <strong>Flex Hour Report</strong>
        </Card.Header>
      </Card>
      <FlexMonthComponent months={months} />
    </div>
  );
}

function mapStateToProps(state) {
  const flex = state.personFlexSummary;

  const props =
    flex != null && flex.months != null
      ? state.personFlexSummary
      : { months: [] };

  return props;
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPersonFlexSummary: personId =>
      dispatch(fetchPersonFlexSummary(personId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlexMonthView);
