// export const initialState = {
//   current_user: '',
//   username: [
//     {
//       email: '',
//       password: '',
//       plan: {
//         name: '',
//         day: null
//       },
//       metrics: {
//         initial_height: 0,
//         initial_weight: 0,
//         initial_heartrate: 0,
//         target_weight: 0,
//         target_heartrate: 0
//       },
//       progress: [
//         {
//           week: 0,
//           weight: 0,
//           heartrate: 0
//         }
//       ],
//       seting: {
//         notification: false,
//         sound: false,
//         sync: false
//       },
//       custom_data: {
//         exercises: [],
//         dishes: [],
//         plans: []
//       },
//       exercise_data: [
//         {
//           day: 0,
//           exercise: '',
//           duration: '',
//           heartrate: ''
//         }
//       ],
//       date_created: null,
//       date_modified: null
//     }
//   ],
//   custom_data: {
//     exercises: [
//       {
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
//       }
//     ],
//     dishes: [
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
//       }
//     ],
//     custom_plan: [
//       {
//         creator: '',
//         name: '',
//         difficulty: '',
//         plan: [
//           {
//             day: 0,
//             exercises: [
//               {
//                 name: '',
//                 reps: 0
//               }
//             ],
//             meals: []
//           }
//         ],
//         date_created: null,
//         date_modified: null
//       }
//     ]
//   }
// }

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
