import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Text, Fab, Icon } from 'native-base';
import { Nav, Wrapper } from '../../components';
import { recipes } from '../../default/recipes';

class FoodList extends React.Component {
  state = {
    user: {},
    items: []
  };

  componentWillMount = () => {
    // if (!this.props.user) {
    //   Actions.login();
    // }
    this.setState({ user: this.props.user, items: recipes });
  };

  render() {
    return [
      <Nav key={0} title="Food" />,
      <Wrapper key={1}>
        <List
          dataArray={this.state.items}
          renderRow={(item, index) => (
            <ListItem
              key={index}
              onPress={() => {
                console.log(item);
                Actions.recipe({ user: this.state.user, item });
              }}
            >
              <Text>{item.name}</Text>
            </ListItem>
          )}
        />
      </Wrapper>,
      <Fab
        key={2}
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => Actions.foodAdd({ user: this.state.user })}
      >
        <Icon name="md-add" />
      </Fab>
    ];
  }
}

export default FoodList;
