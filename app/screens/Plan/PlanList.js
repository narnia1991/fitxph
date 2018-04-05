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
import { Body, Left, Right, Text, Title, Fab, Icon } from 'native-base';
import { StyleSheet, Modal, TouchableHighlight, View } from 'react-native';
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
    this.setState({ user: this.props.user, items });
  };

  componentDidMount = async () => {
    //get plan list data
    // let items = [{ name: 'Easy', purpose: 'Weight Loss' }, { name: 'Easy', purpose: 'Weight Gain' }];
    // items = [items, ...fetchedData]
    // this.setState({ items });
  };

  handlePlanPress = async () => {
    const user = { ...this.state.user, plan: this.state.selectedPlan };
    await setData(this.state.user.username);
    Actions.journey({ user: this.state.user });
  };

  render() {
    return [
      <Wrapper key={1}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Are You Sure You Want this Plan?</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: !this.state.modalVisible });
                }}
              >
                <Text>No</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.handlePlanPress}>
                <Text>Yes</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Lists
          items={this.state.items}
          keyValue="name"
          subKey="purpose"
          handlePress={item => {
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
