import React, { Component } from "react";
import { DatePickerAndroid } from "react-native";
import { Input, Item, Label } from "native-base";

const options = {
  date: new Date(),
  maxDate: new Date()
}

class DatePicker extends Component {
  state = {
    date: ""
  }

  showPicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          date: new Date(year, month, day)
        })
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  render() {
    const date = this.state.date ? (this.state.date.toLocaleDateString()) : ""

    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input
          onFocus={this.showPicker}
          value={date}
          onChangeText={this.props.onChangeText(date)}
        />
      </Item>
    )
  }
}

export default DatePicker;