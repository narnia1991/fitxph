import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Form, Label, Picker, Text } from "native-base";
import Link from "./Link";

const Option = Picker.Item

class Dropdown extends Component {
  state = {
    picker: []
  }

  componentWillMount() {
  }

  addPicker = () => {
    this.setState({
      picker: picker + 1
    })
  }

  removePicker = () => {
    this.setState({
      picker: 0
    })
  }

  render() {
    const { label, onValueChange, options, prompt, selected } = this.props
    return (
      <View style={styles.mainDiv}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.subDiv}>
          <Picker
            prompt={prompt ? "Select One" : ""}
            selectedValue={selected}
            onValueChange={onValueChange}
          >
            {options.map((item, index) => (
              <Option key={index} label={item.name} value={item.value} />
            ))}
          </Picker>
        </View>
        <Link text="Add" onPress={this.addPicker} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainDiv: {
    margin: 15
  },
  subDiv: {
    backgroundColor: "rgba(169,169,169,.8)",
  },
  label: {
    color: "#00FFFF"
  }
});

export default Dropdown;