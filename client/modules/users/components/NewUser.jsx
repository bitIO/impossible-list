import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

const NewUser = ({ content }) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <h1>Register</h1>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <ButtonInput bsStyle="primary" type="submit" value="Sign Up"/>
      </form>
    </Panel>
  </Col>
);

export default NewUser;
