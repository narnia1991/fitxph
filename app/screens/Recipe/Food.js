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

import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SectionLabel, Wrapper } from '../../components';
import imageLoader from '../../utils/imageLoader';

class Food extends React.Component {
  state = { user: null, item: null };

  componentWillMount = () => {
    if (!this.props.user) {
      Actions.login();
    }
    this.setState({ user: this.props.user, item: this.props.item });
  };

  render() {
    const { item } = this.state;
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
              <Text>{item.ingredients}</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>
    );
  }
}

export default Food;