import React from "react";
import { Col, Row } from "react-bootstrap";
import _ from "lodash";

const playlists = [
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
  "https://www.youtube.com/embed/I9LAoQgYRAg",
];

const Sermons = () => {
  return (
    <div className="sermons-container">
      <h3>Sermons</h3>
      <div className="youtube-container">
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {_.map(playlists, (playlist, index) => (
            <Col key={index}>
              <iframe
                width="100%"
                height="315"
                src={playlist}
                allowFullScreen
              ></iframe>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Sermons;
