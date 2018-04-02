import React from "react";
import { Container, Root, StyleProvider } from "native-base";
import { Router, Scene } from "react-native-router-flux";
import { Landing, Login, Reference, SignUp, Splash, Sync, SyncNow } from './screens/General';
import { PlanAdd, PlanList } from './screens/Plan';
import { InitialData, Progress } from './screens/Profile';
import { ExerciseList } from './screens/Exercise';

import { Nav, NavBar } from "./components";
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

class routes extends React.Component {

  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <Container>
            <Router>
              <Scene key="root">
                <Scene
                  key="splash"
                  // initial={true}
                  component={Splash}
                  hideNavBar={true}
                />
                <Scene
                  key="login"
                  component={Login}
                  title="login"
                  hideNavBar={true}
                />
                <Scene
                  key="landing"
                  component={Landing}
                  navBar={NavBar}
                  title="FitXPH"
                  passProps
                />
                <Scene key="signup" component={SignUp} hideNavBar={true} />
                <Scene key="sync"
                  component={Sync} hideNavBar={true} passProps />
                <Scene key="syncnow"
                  component={SyncNow} hideNavBar={true} passProps />

                <Scene key="plan"
                  title="Plan"
                  navBar={Nav}
                  component={PlanList} passProps />
                <Scene key="planAdd"
                  title="Add a Plan"
                  hideNavBar={true}
                  component={PlanAdd} passProps />

                <Scene
                  key="initialData"
                  component={InitialData}
                  hideNavBar={true}
                  passProps
                />
                <Scene
                  key="progress"
                  component={Progress}
                  hideNavBar={true}
                  passProps
                />

                <Scene
                  key="reference"
                  component={Reference}
                  hideNavBar={true}
                  passProps
                />

                <Scene
                  key="exerciselist"
                  initial={true}
                  component={ExerciseList}
                  hideNavBar={true}
                  passProps
                />
                {/*
                <Scene
                  key="calendar"
                  component={Calendar}
                  hideNavBar={true}
                  passProps
                />

                <Scene
                  key="exercise"
                  component={Exercise}
                  hideNavBar={true}
                  passProps
                />

                <Scene key="day" component={Day} hideNavBar={true} passProps />

                <Scene
                  key="exercisefinished"
                  component={ExerciseFinished}
                  hideNavBar={true}
                  passProps
                />
                <Scene
                  key="exerciseongoing"
                  component={ExerciseOnGoing}
                  hideNavBar={true}
                  passProps
                />
                <Scene
                  key="featured"
                  component={Featured}
                  hideNavBar={true}
                  passProps
                />
                <Scene key="food" component={Food} hideNavBar={true} passProps />
                <Scene
                  key="foodadd"
                  component={FoodAdd}
                  hideNavBar={true}
                  passProps
                />
                <Scene
                  key="foodlist"
                  component={FoodList}
                  hideNavBar={true}
                  passProps
                />

                <Scene
                  key="progress"
                  component={Progress}
                  hideNavBar={true}
                  passProps
                />
                 */}
              </Scene>
            </Router>
          </Container>
        </StyleProvider>
      </Root>
    );
  }
}
export default routes;
