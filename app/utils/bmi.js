import moment from 'moment';

export const bmi = (weight, height) => weight / (height * height);

export const reverseBMI = (height, bmi) => (height * height) * bmi;

export const bmiStatus = bmi => {
  switch (true) {
    case bmi < 18.5:
      return 'Underweight';
      break;
    case bmi > 18.4 && bmi < 25:
      return 'Healthy weight';
      break;
    case bmi > 24.9 && bmi < 30:
      return 'Above Ideal';
      break;
    case bmi > 29.9:
      return 'Obese';
      break;
    default:
      return 'Unknown';
  }
};

export const hrStatus = heart_rate => {
  switch (true) {
    case heart_rate > 100:
      return 'Above normal';
      break;
    case heart_rate > 59 && heart_rate < 101:
      return 'Normal';
      break;
    case heart_rate < 60:
      return 'Below normal';
  }
};

export const hrTarget = (heart_rate, birthdate) => {
  const age = calculate_age(birthdate);
  const max = 220 - age;
  const mid = max * 0.7;
  const high = max * 0.85;
  return {
    mid,
    high,
    max
  };
};

const calculateAge = d => moment().diff(d, 'years', true);
