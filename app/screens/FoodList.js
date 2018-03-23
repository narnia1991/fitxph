//food list
//fab to add food
import React from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
class FoodList extends React.Component {
  state = {
    list: null,
    user: null
  };

  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };

  handleAdd = () => {
    //add food
  };

  renderlist = () => {
    if (this.state.list) {
      return this.state.list.map(item => {
        return <ListItem>{item.name}</ListItem>;
      });
    }
    return <Text>Nothing To Show</Text>;
  };

  render() {
    return (
      <Container>
        <Header title="Food" />
        <Content>
          <List>{this.renderList}</List>
          <Fab
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={this.handleAdd}
          >
            <Icon name="share" />
          </Fab>
        </Content>
      </Container>
    );
  }
}

export default FoodList;
