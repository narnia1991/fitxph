import React from 'react'
import { Lightbox, Router, Scene } from 'react-native-router-flux'
import {
  Calendar,
  Day,
  Exercise,
  ExerciseFinished,
  ExerciseList,
  ExerciseOnGoing,
  Featured,
  Food,
  FoodList,
  InitialData,
  Landing,
  Login,
  Plan,
  PlanList,
  Progress,
  Reference,
  SignUp,
  Splash,
  Sync
} from './screens'

export default class routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="splash" component={Splash} hideNavBar={true} />
          <Scene
            key="login"
            component={Login}
            title="login"
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="landing"
            component={Landing}
            hideNavBar={true}
            passProps
          />
          <Scene key="signup" component={SignUp} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

/* <Scene
            key="calendar"
            component={Calendar}
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
          <Scene
            key="reference"
            component={Reference}
            hideNavBar={true}
            passProps
          /> */
