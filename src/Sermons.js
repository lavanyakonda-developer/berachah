import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import _ from "lodash";
import logo from "./images/logo.png";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(false);

  const readGoogleSheets = () => {
    fetch("https://sheet.best/api/sheets/13dd9454-67e2-4998-a277-d65765cfd58b")
      .then((response) => response.json())
      .then((data) => {
        setSermons(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    readGoogleSheets();
  }, []);

  return (
    <div className="sermons-container">
      <h3>Sermons</h3>
      {loading ? (
        <div className="preloader">
          <div className="preloader-logo">
            <img src={logo} alt="" width="143" className="img-logo" />
          </div>
          <div className="preloader-body">
            <div id="loadingProgressG">
              <div className="loadingProgressG" id="loadingProgressG_1"></div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Sermons;
