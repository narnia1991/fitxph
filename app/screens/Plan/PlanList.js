//list of plans
/*
plan structure:
{
    name,
    creator,
    type,
    difficulty,
    exerciseplan
    dietplan
    exercises,
    dishes
}
*/
import React from 'react';
import { Body, Button, Left, Right, Text, Title, Fab, Icon } from 'native-base';
import { Alert, StyleSheet, Modal, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Lists, Wrapper } from '../../components';
import { weight_loss } from '../../default/plan';
import { weight_gain } from '../../default/plan2';
import { getData, setData } from '../../AsyncStorage';

class PlanList extends React.Component {
  state = {
    items: null,
    user: null,
    selectedPlan: null,
    modalVisible: false
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    const items = [
      { name: weight_loss.name, purpose: weight_loss.purpose },
      { name: weight_gain.name, purpose: weight_gain.purpose }
    ];

    if (this.props.user.plan) {
      Actions.journey({ user: this.props.user });
    }
    this.setState({ user: this.props.user, items });
  };

  componentDidMount = async () => {
    //get plan list data
    // let items = [{ name: 'Easy', purpose: 'Weight Loss' }, { name: 'Easy', purpose: 'Weight Gain' }];
    // items = [items, ...fetchedData]
    // this.setState({ items });
  };

  handlePlanPress = async () => {
    console.log('pressed', this.state);
    const user = { ...this.state.user, plan: this.state.selectedPlan, progress: { day: 0 } };
    console.log(user);
    await setData(this.state.user.username, user);
    Actions.journey({ user });
  };

  render() {
    return [
      <Wrapper key={1}>
        <Lists
          items={this.state.items}
          keyValue="name"
          subKey="purpose"
          handlePress={item => {
            Alert.alert(
              'Select Plan',
              'Are You Sure You Want to Select this Plan?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    style: 'cancel';
                  }
                },
                { text: 'OK', onPress: this.handlePlanPress }
              ],
              { cancelable: false }
            );
            this.setState({ selectedPlan: item });
          }}
        />
      </Wrapper>,
      <Fab
        key={2}
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => Actions.planAdd({ user: this.state.user })}
      >
        <Icon name="md-add" />
      </Fab>
    ];
  }
}

export default PlanList;
