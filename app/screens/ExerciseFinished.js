import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";

class ExerciseFinished extends React.Component {
  state = {
    user: {}
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  handleClick() {
    console.log("====================================");
    console.log("handleClick");
    console.log("====================================");
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Image source={imageLoader.Splash} />
          <Card>
            <CardItem header>
              <Text>Congratulations!!!</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>You have finished your workout</Text>
              </Body>
            </CardItem>
          </Card>
          <Button block onPress={this.handleClick}>
            <Text>Go to Home Screen</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ExerciseFinished;
