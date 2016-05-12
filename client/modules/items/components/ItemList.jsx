import React from 'react';

import Item from './Item.jsx';
import ItemProgress from './ItemProgress.jsx';

const ItemList = ({ items, currentDate, percentage }) => (<div>
  <ItemProgress percentage={percentage} />
  <a href="/edit">
    <i className="fa fa-home"></i> New Item
  </a>
  {items.map(item => (
    <Item key={item._id} item={item} currentDate={currentDate} />
  ))}
</div>);

ItemList.propTypes = {
  items: React.PropTypes.array,
  currentDate: React.PropTypes.object,
  percentage: React.PropTypes.number,
};

ItemList.defaultProps = {
  percentage: 0,
};

export default ItemList;
