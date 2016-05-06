import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import ItemProgress from './ItemProgress.jsx';

const ItemList = ({ items, currentDate, percentage }) => (
  <Row>
    <Row>
      <Col xs={12} sm={6}><ItemProgress percentage={percentage}/></Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12}>
        <a href="/edit"><Glyphicon glyph="plus" /> New Item</a>
      </Col>
      {items.map(item => (
         <Item key={item._id} item={item} currentDate={currentDate} />
      ))}
    </Row>
  </Row>
);

export default ItemList;
