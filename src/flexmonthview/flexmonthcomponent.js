import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card, Collapse, Button } from "react-bootstrap";

function lastTitle(array) {
  if (array != null && array.length > 0) {
    console.log(array);
    console.log(array.length);
    console.log(array[array.length - 1]);
    return array[array.length - 1].title;
  }
}

export default function FlexMonthComponent({ personId, fullname, months }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(lastTitle(months));
  }, [months]);

  const mths = months == null ? [] : months;

  return (
    <div>
      {mths.map(month => {
        return (
          <Card key={month.title}>
            <Card.Body>
              <Card.Title>
                <Button
                  variant={month.title === selected ? "light" : "secondary"}
                  onClick={() =>
                    setSelected(month.title === selected ? null : month.title)
                  }
                >
                  {month.title}
                </Button>
              </Card.Title>
              <Collapse in={month.title === selected}>
                <div>
                  {month.dates != null && (
                    <Container>
                      <Row>
                        <Col>Day</Col>
                        <Col>Normal Hours</Col>
                        <Col>Overtime</Col>
                        <Col>Ignored</Col>
                        <Col>Fill</Col>
                        <Col>Fixed</Col>
                        <Col>Balance</Col>
                      </Row>
                      {month.dates.map(day => {
                        const style = day.workday
                          ? { backgroundColor: "var(--light)" }
                          : { backgroundColor: "var(--gray)" };
                        return (
                          <Row style={style}>
                            <Col>{day.date}</Col>
                            <Col>{day.normal}</Col>
                            <Col>{day.overtime}</Col>
                            <Col>{day.ignored}</Col>
                            <Col>{day.fill}</Col>
                            <Col>{day.fixed}</Col>
                            <Col>{day.total}</Col>
                          </Row>
                        );
                      })}
                    </Container>
                  )}
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
