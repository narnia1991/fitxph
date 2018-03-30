import React, { Component } from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

export const Error = ({ message }) => <Text style={{ color: "red" }}>{message}</Text>

export const ScreenLabel = ({ text }) => <Text style={styles.label}>{text}</Text>

const styles = StyleSheet.create({
  label: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20
  }
})
