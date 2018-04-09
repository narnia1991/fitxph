${username}:{
  username,
  password,
  current_plan,
  current_day,
  current_day_finished,
  settings_notification,
  settings_sounds,
  sync_email,
  sync_password,
  show_sync,
  show_featured,
}
${username}_progress:{
    initial_weight,
    initial_height,
    initial_heart_rate,
    data:[
      {
        date,
        weight,
        heart_rate_average
      }
    ]
}
${username}_exercise_data:[
  {
    day,
    initial_heart_rate,
    end_heart_rate,
    date,
    data:[
      {
        exercise,
        time,
      }
    ]
  }
]
${username}_custom_plan:[
  {
    name,
  }
]
${username}_custom_dishes:[
  {
    name,
  }
]
${username}_custom_exercises:[
  {
    creator,
      name,
      target_muscle,
      description,
      instruction,
      image_url,
      video_url
  }
]


//ALGORITHMS
heart_rate:{
  max_heart_rate:'200 - age',
  normal:'60 - 100',
  heart_rate_status,
  hrr: 'subtract hrr from max',
  min_training_zone: 'hrr * 0.7',
  max_training_zone: 'hrr * 0.85'
}

reverse_bmi:{
  max_loss_week:'1kg',
  max_gain_week:'1kg',
  min_target: '18.5 x height(m)^2',
  max_target: '24.9 x height(m)^2'
}
