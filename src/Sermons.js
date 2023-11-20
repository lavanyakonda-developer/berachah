import React from "react";
import { Col, Row } from "react-bootstrap";
import _ from "lodash";

const Sermons = (props) => {
  const { sermons } = props;

  return (
    <div className="sermons-container">
      <h3>Sermons</h3>
      {
        <div className="youtube-container">
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {_.map(sermons, (sermon, index) => (
              <Col key={index}>
                <iframe
                  width="100%"
                  height="315"
                  src={sermon.link}
                  allowFullScreen
                  title={sermon.title}
                ></iframe>
                <span>{sermon.title}</span>
              </Col>
            ))}
          </Row>
        </div>
      }
    </div>
  );
};

export default Sermons;
