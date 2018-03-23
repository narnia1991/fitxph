// calendar to track the exercises
import React from "react";
import { Calendar as Kalendaryo } from "react-native-calendars";
import { Button, Container, Content } from "native-base";
import { Actions } from "react-native-router-flux";

class Calendar extends React.Component {
  state = {
    user: null
  };

  comoponentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  componentDidMount = () => {
    //get progressdata from asyncstorage
  };

  render() {
    return (
      <Container>
        <Content>
          <Kalendaryo
            // Initially visible month. Default = Date()
            current={Date()}
            onDayPress={day => {
              console.log("selected day", day);
            }}
            monthFormat={"yyyy MM"}
            onMonthChange={month => {
              console.log("month changed", month);
            }}
            hideArrows={true}
            hideExtraDays={true}
            disableMonthChange={true}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            onPressArrowLeft={substractMonth => substractMonth()}
          />
          <Button block>
            <Text>Proceed</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Calendar;
