//food image
//food details
//if custom food, option to delete
//       {
//         creator: '',
//         name: '',
//         calories: '',
//         difficulty: '',
//         preparation_time: '',
//         description: '',
//         instructions: '',
//         mage_url: '',
//         video_url: '',
//         date_created: '',
//         date_modified: ''
//       } */

import React from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import { Actions } from "react-native-router-flux";

class Food extends React.Component {
  state = { user: null, food: null };
  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user, food: this.props.food });
  };
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: "Image URL" }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Food;
