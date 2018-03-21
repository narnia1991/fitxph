//food list
//fab to add food
import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text } from 'native-base'
export default class FoodList extends Component {
  state = {
    list: null
  }
  handleAdd = () => {
    //add exercise
  }
  renderlist = () => {
    if (this.state.list) {
      return this.state.list.map(item => {
        return <ListItem>{item.name}</ListItem>
      })
    }
    return <Text>Nothing To Show</Text>
  }

  render() {
    return (
      <Container>
        <Header title="Food" />
        <Content>
          <List>{this.renderList}</List>
          <Fab
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={this.handleAdd}
          >
            <Icon name="share" />
          </Fab>
        </Content>
      </Container>
    )
  }
}
