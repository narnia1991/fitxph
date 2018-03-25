//food list
//fab to add food
import React from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Fab,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";

class FoodList extends React.Component {
  state = {
    list: null,
    user: null,
    active: "true"
  };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user });
  };

  handleAdd = () => {
    //add food
  };

  renderlist = () => {
    if (this.state.list) {
      return (
        <List
          dataArray={this.state.list}
          renderRow={(item, index) => (
            <ListItem key={index}>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      );
    }
    return <Text>Nothing To Show</Text>;
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>{this.renderlist()}</Content>
        <Fab
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-add" />
        </Fab>
      </Container>
    );
  }
}

export default FoodList;
