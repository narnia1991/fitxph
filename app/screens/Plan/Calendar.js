// calendar to track the exercises
import React from "react";
import { Calendar as Kalendaryo } from "react-native-calendars";
import { Button, Container, Content } from "native-base";
import { Actions } from "react-native-router-flux";

class Calendar extends React.Component {
  state = {
    user: null
  };

  componentWillMount = () => {
    // if (!this.props.user) {
    //   Actions.login();
    // }
    console.log("calendar");
    // this.setState({
    //   user: this.props.user,
    //   progress: this.props.user.progress
    // });
  };

  componentDidMount = () => {
    //get progressdata from asyncstorage
  };
  handleProceedPress = () => {
    Actions.day({ user: this.state.user });
  };

  render() {
    return null;
    // return (
    //   <Container>
    //     <Content>
    //       <Kalendaryo
    //         // Initially visible month. Default = Date()
    //         current={Date()}
    //         onDayPress={day => {
    //           console.log("selected day", day);
    //         }}
    //         monthFormat={"yyyy MM"}
    //         onMonthChange={month => {
    //           console.log("month changed", month);
    //         }}
    //         hideArrows={true}
    //         hideExtraDays={true}
    //         disableMonthChange={true}
    //         // Hide day names. Default = false
    //         hideDayNames={true}
    //         // Show week numbers to the left. Default = false
    //         showWeekNumbers={true}
    //         onPressArrowLeft={substractMonth => substractMonth()}
    //       />
    //       <Button block>
    //         <Text onPress={this.handleProceedPress}>Proceed</Text>
    //       </Button>
    //     </Content>
    //   </Container>
    // );
  }
}

export default Calendar;
