export const dummyUser = {
  username: 'puroyski'
      password: 'potato',
      plan:'defaultfull',
      progress:{
        day:10,
        intitial_height:169,
        initial_weight:68,
        initial_date: Date(),
        target_weight:60
        progress:{
          date: Date(),
          weight:67.5
        }
      }
        notification: false,
        sound: false,
        sync: false
      custom_data: {
        exercises: [],
        dishes: [],
        plans: []
      },
      date_created: null,
      date_modified: null
    }
  ],
  custom_data: {
    exercises: [
      {
        creator: '',
        name: '',
        difficulty: '',
        target_muscle_group: '',
        equipment: '',
        classification: '',
        description: '',
        instruction: '',
        image_url: '',
        video_url: '',
        date_created: '',
        date_modified: ''
      }
    ],
    dishes: [
      {
        creator: '',
        name: '',
        calories: '',
        difficulty: '',
        preparation_time: '',
        description: '',
        instructions: '',
        mage_url: '',
        video_url: '',
        date_created: '',
        date_modified: ''
      }
    ],
    custom_plan: ''
  }
}

export const userExerciseData = {
  day: 0,
  time: '',
  exercise: '',
  duration: '',
  heartrate: ''
}

export const dish = {
  creator: '',
  name: '',
  calories: '',
  difficulty: '',
  preparation_time: '',
  description: '',
  instructions: '',
  mage_url: '',
  video_url: '',
  date_created: '',
  date_modified: ''
}

export const exercise = {
  creator: '',
  name: '',
  difficulty: '',
  target_muscle_group: '',
  equipment: '',
  classification: '',
  description: '',
  instruction: '',
  image_url: '',
  video_url: '',
  date_created: '',
  date_modified: ''
}

export const setting = {
  notification: false,
  sound: false,
  sync: false
}
