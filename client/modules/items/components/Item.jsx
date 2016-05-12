import React from 'react';
import Button from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Switch from 'react-toolbox/lib/switch';
import moment from 'moment';

class Item extends React.Component {
  markComplete(complete) {
    Meteor.call('items.markComplete', complete, this.props.item._id);
  }

  render() {
    const { item, currentDate } = this.props;
    const color =
      (item.due ? moment(item.due) : moment()).isBefore(currentDate) ?
        'red' : '';
    return (<Card style={{ width: '350px' }} raised >
      <CardTitle
        style={{ color }}
        avatar="https://placeimg.com/80/80/animals"
        title={item.name}
        subtitle={moment(item.due).format('dddd, MMMM Do YYYY')}
      />
      <CardText>{item.description}</CardText>
      <CardText>
        <Switch
          checked={item.complete}
          label="Completed"
          onChange={this.markComplete.bind(this)}
        />
      </CardText>
      <CardActions>
        <Button label="Edit" href={`/edit/${item._id}`} icon="mode_edit" />
      </CardActions>
    </Card>);
  }
}

Item.propTypes = {
  item: React.PropTypes.object,
  currentDate: React.PropTypes.object,
};

export default Item;
