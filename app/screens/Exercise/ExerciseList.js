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
    console.log('exerciselist', this.state);
  };

  render() {
    console.log(this.state);
    return [
      <Nav key={0} title="Exercises" />,
      <Wrapper key={1}>
        <List
          dataArray={this.state.items}
          renderRow={(item, index) => (
            <ListItem
              key={index}
              onPress={() => {
                console.log(item);
                Actions.exercise({ user: this.state.user, item });
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
        onPress={() => Actions.exerciseAdd({ user: this.state.user })}
      >
        <Icon name="md-add" />
      </Fab>
    ];
  }
}

export default ExerciseList;
