import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Form, H3, Label, Picker, Text, Item } from "native-base";
import { Dropdown, SectionLabel, Submit, TextBox, Wrapper } from "../../components";

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
          <Dropdown
            label="Breakfast"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Dropdown
            label="Morning Snack"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Dropdown
            label="Lunch"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Dropdown
            label="Afternoon Snack"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Dropdown
            label="Supper"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" },
            ]}
            prompt
          />
          <Dropdown
            label="Bedtime Snack"
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Text style={styles.margin}>Exercises:</Text>
          <Dropdown
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
          <Dropdown
            selected={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
            options={[
              { name: "Wallet", value: "key0" },
              { name: "ATM Card", value: "key1" }
            ]}
            prompt
          />
        </Form>
      </Wrapper>,
      <Submit key={2} text="Add Plan" onSubmit={this.handleSubmit} />
    ]
  }
}

{/* <Dropdown
  mode="dropdown"
  selectedValue={this.state.selected1}
  onValueChange={this.onValueChange.bind(this)}
  options={[
    { name: "Wallet", value: "key0" },
    { name: "ATM Card", value: "key1" }
  ]}
/> */}

const styles = StyleSheet.create({
  div: {
    backgroundColor: "rgba(169,169,169,.8)",
    marginTop: 15,
  },
  margin: {
    marginTop: 20
  },

})

export default PlanAdd