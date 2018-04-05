//TODO: create view for initial data and target form
// height | initial weight | target weight
import React from "react";
import { Actions } from "react-native-router-flux";
import { DatePickerAndroid, TouchableOpacity } from "react-native";
import moment from "moment";
import { Form, Text } from "native-base";
import { DatePicker, Dropdown, ScreenLabel, SectionLabel, Submit, TextBox, Wrapper } from "../../components";
import { setData } from "../../AsyncStorage";

const options = {
  date: new Date(),
  maxDate: new Date()
}

class InitialData extends React.Component {
  state = {
    user: {},
    gender: ""
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  onValueChange(value) {
    this.setState({
      gender: value
    });
  }

  handleSubmit = async () => {
    const { name, dob,gender, weight, height } = this

    const user = {
       ...this.state.user,
       name, dob, gender,weight, height,
       start_date: moment(options.date).format("YYYY-d-MM")
    }

    await setData(this.state.user.username, user)

    Actions.landing({user})
  }


  render() {
    return [
      <Wrapper key={1}>
        <ScreenLabel text="Let's get started!" />
        <Form>
          <TextBox label="Name" onChangeText={(text) => this.name = text}
          />
          <DatePicker label="Date of Birth(MM/DD/YYYY)" onChangeText={(text) => this.dob = text} />
          <Dropdown label="Gender"
           onChange={(value) => this.gender = value}
            options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" }
          ]} />
          <SectionLabel text="Target Information" />
          <TextBox label="Weight" onChangeText={(text) => this.weight = text} />
          <TextBox label="Height" onChangeText={(text) => this.height = text} />

        </Form>
      </Wrapper>,
      <Submit key={2} text="Submit" onSubmit={this.handleSubmit} />
    ];
  }
}

export default InitialData;
