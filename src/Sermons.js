import React from "react";
import { Col, Row } from "react-bootstrap";
import _ from "lodash";

const playlists = [
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
  {
    link: "https://www.youtube.com/embed/I9LAoQgYRAg",
    title: "This is the title for the video",
  },
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
                src={playlist.link}
                allowFullScreen
                title={playlist.title}
              ></iframe>
              <span>{playlist.title}</span>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Sermons;
