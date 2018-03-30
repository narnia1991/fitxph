import React from "react";
import {
  Root,
  StyleProvider
} from "native-base";
import { Lightbox, Router, Scene } from "react-native-router-flux";
import {
  // Calendar,
  // Day,
  // Exercise,
  // ExerciseFinished,
  // ExerciseList,
  // ExerciseOnGoing,
  // Featured,
  // Food,
  // FoodAdd,
  // FoodList,
  // InitialData,
  Landing,
  Login,
  // Plan,
  // PlanList,
  // Progress,
  // Reference,
  SignUp,
  Splash,
  // Sync,
  // SyncNow
} from "./screens";
import NavBar from "./components/NavBar";
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

class routes extends React.Component {
  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <Router>
            <Scene key="root">
              <Scene
                key="splash"
                initial={true}
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
                initial={true}
                component={Landing}
                navBar={NavBar}
                title="FitXPH"
                passProps
              />

              <Scene key="signup" component={SignUp} hideNavBar={true} />
              {/*
           <Scene
            key="calendar"
            component={Calendar}
            hideNavBar={true}
            passProps
          />

          <Scene
            key="reference"
            component={Reference}
            hideNavBar={true}
            passProps
          />
          <Scene key="sync" component={Sync} hideNavBar={true} passProps />
          <Scene key="day" component={Day} hideNavBar={true} passProps />
          <Scene
            key="exercise"
            component={Exercise}
            hideNavBar={true}
            passProps
          />
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
            key="initialdata"
            component={InitialData}
            hideNavBar={true}
            passProps
          />
          <Scene key="plan" component={Plan} hideNavBar={true} passProps />
          <Scene
            key="planlist"
            component={PlanList}
            hideNavBar={true}
            passProps
          />
          <Scene
            key="progress"
            component={Progress}
            hideNavBar={true}
            passProps
          />
          <Scene key="syncnow" component={SyncNow} hideNavBar={true} />
          <Scene
            key="exerciselist"
            component={ExerciseList}
            hideNavBar={true}
            passProps
          /> */}
            </Scene>
          </Router>
        </StyleProvider>
      </Root>
    );
  }
}
export default routes;
