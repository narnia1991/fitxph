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

import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SectionLabel, Wrapper } from '../../components';
import imageLoader from '../../utils/imageLoader';

class Exercise extends React.Component {
  state = { user: nul, item: null };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user, item: this.props.item });
  };

  render() {
    const item = this.state.item;
    return (
      <Wrapper>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{item.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={imageLoader[item.image_url] || { uri: item.image_url }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>{item}</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>
    );
  }
}

export default Exercise;
