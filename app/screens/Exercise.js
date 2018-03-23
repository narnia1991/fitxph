//display image
//display details
//if custom,option to delete
/* {
//         creator: '',
//         name: '',
//         difficulty: '',
//         target_muscle_group: '',
//         equipment: '',
//         classification: '',
//         description: '',
//         instruction: '',
//         image_url: '',
//         video_url: '',
//         date_created: '',
//         date_modified: ''
//       } */

import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
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
class Exercise extends React.Component {
  state = { user: null };

  componentWillMount = () => {
    this.setState({ user: this.props.user });
  };

  render() {
    return (
      <Container>
        <Header />
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

export default Exercise;
