import React from 'react'
import { AsyncStorage } from 'react-native'

export const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key)
    return JSON.parse(data)
  } catch (err) {
    console.log(err.message)
    return false
  }
}

export const setData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
    console.log('setdata', data)
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}

export const updateData = async (key, data) => {
  try {
    const previousData = await AsyncStorage.getItem(key)
    previousData = JSON.parse(previousData)
    previousData.push(data)
    const data = await AsyncStorage.setItem(key, JSON.stringify(previousData))
    if (!data) return false
    else return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}

export const deleteData = async key => {
  try {
    const data = await AsyncStorage.removeItem(key)
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}
