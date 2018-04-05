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
  state = { user: null, item: null };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user, item: this.props.item });
    console.log('exercise', this.state);
  };

  render() {
    console.log(this.state);
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
              <Text>{item.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>
    );
  }
}

export default Exercise;
