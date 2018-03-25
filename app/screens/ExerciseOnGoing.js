//add option to bluetooth
//timer
//exercise image
import React from "react";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

class ExerciseOnGoing extends React.Component {
  state = {
    user: {}
  };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Fab
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-checkmark-circle" />
        </Fab>
      </Container>
    );
  }
}

export default ExerciseOnGoing;
