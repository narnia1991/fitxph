import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Form, Label, Picker, Text, Item } from "native-base";
import { Submit, TextBox, Wrapper } from "../../components";

const Option = Picker.Item

class PlanAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: ""
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  handleSubmit = values => {
    return
  }

  render() {
    return [
      <Wrapper key={1} padder>
        <Form>
          <TextBox label="Name of Plan" />
          <TextBox label="Purpose" />
          <Text style={styles.margin}>Meal:</Text>
          <View style={styles.div}>
            <Picker
              iosHeader="Food"
              placeholder="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
              itemStyle={{ color: "#FFF" }}
              itemTextStyle={{ color: "white" }}
            >
              <Option label="Wallet" value="key0" />
              <Option label="ATM Card" value="key1" />
              <Option label="Debit Card" value="key2" />
              <Option label="Credit Card" value="key3" />
              <Option label="Net Banking" value="key4" />
            </Picker>
          </View>


        </Form>
      </Wrapper>,
      <Submit key={2} text="Add Plan" onSubmit={this.handleSubmit} />
    ]
  }
}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "rgba(169,169,169,.8)",
    marginTop: 15,
  },
  margin: {
    marginTop: 15
  }
})

export default PlanAdd