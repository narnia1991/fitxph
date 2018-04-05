import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SectionLabel, Wrapper } from '../../components';
import imageLoader from '../../utils/imageLoader';

class Discover extends React.Component {
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
          <CardItem header>
            <Text>What is a healthy weight loss?</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>It’s natural for anyone trying to lose weight to want to lose it very quickly. But evidence shows that people who lose weight gradually and steadily (about 0.453592 to 0.907185 kg per week) are more successful at keeping weight off. Healthy weight loss isn’t just about a “diet” or “program”. It’s about an ongoing lifestyle that includes long-term changes in daily eating and exercise habits.
                </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Once you’ve achieved a healthy weight, by relying on healthful eating and physical activity most days of the week (about 60—90 minutes, moderate intensity), you are more likely to be successful at keeping the weight off over the long term.</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                https://www.cdc.gov/healthyweight/losing_weight/index.html</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Text>What is a healthy weight gain?</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>If you have a high metabolism or are recovering from illness, or if you're an older adult with little appetite, gaining weight can be as challenging as losing weight. It's best to gain weight at a moderate rate to ensure that you're not adding too much body fat and are putting on a fair amount of healthy muscle. A steady pace of 1/2 pound to 1 pound per week -- or 2 to 4 pounds per month -- can usually be achieved in a sound nutritional way. Resist the temptation to speed up the process and load up your diet with poor quality foods that may have a lot of calories but lack the nutrition to help you look and feel better.
                </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                https://www.livestrong.com/article/524645-can-i-drink-weight-gain-shakes-to-gain-weight-without-exercise/</Text>
            </Body>
          </CardItem>
        </Card>
      </Wrapper>
    );
  }
}

export default Discover;