// exercise list
// fab to add exercise
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Text, Fab, Icon } from 'native-base';
import { Nav, Wrapper } from '../../components';
import { exercises } from '../../default/exercises';

class ExerciseList extends React.Component {
  state = {
    user: {},
    items: []
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user, items: exercises });
    console.log(this.state.items);
  };

  render() {
    return [
      <Nav key={0} title="Exercises" />,
      <Wrapper key={1}>
        <List
          dataArray={this.state.items}
          renderRow={(item, index) => (
            <ListItem key={index}>
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
        onPress={() => this.setState({ active: !this.state.active })}
      >
        <Icon name="md-add" />
      </Fab>
    ];
  }
}

export default ExerciseList;
