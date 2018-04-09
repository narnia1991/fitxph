import { getData, setData } from '../../AsyncStorage';

export const getProgress = username => getData(`${username}_progress`);
