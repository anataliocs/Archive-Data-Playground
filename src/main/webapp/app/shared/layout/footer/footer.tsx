import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="4">
        <p></p>
      </Col>
      <Col md="4">
        <br/>
        <p>Built by Infura</p>
      </Col>
      <Col md="4">
        <p></p>
      </Col>
    </Row>
  </div>
);

export default Footer;
