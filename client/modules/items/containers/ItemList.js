import ItemList from '../components/ItemList.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import moment from 'moment';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({}, { sort: { due: -1 } }).fetch();
    onData(null, { items, currentDate: moment() });
  }
};

export default composeAll(
 composeWithTracker(composer),
 useDeps()
)(ItemList);
