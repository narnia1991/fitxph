import React from "react";
import { AsyncStorage } from "react-native";

export const getData = async key => {
  try {
    console.log(key);
    const data = await AsyncStorage.getItem(key);
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Cannot get item", error);
  }
};

export const setData = (key, data) => {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    throw new Error("Cannot set item");
  }
};

export const updateData = (key, data) => {
  try {
    let previousData = AsyncStorage.getItem(key);
    previousData = JSON.parse(previousData);
    previousData.push(data);
    return AsyncStorage.setItem(key, JSON.stringify(previousData));
  } catch (error) {
    throw new Error("Cannot update item");
  }
};

export const deleteData = key => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error("Cannot delete item");
  }
};
