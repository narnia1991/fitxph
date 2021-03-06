import React, { Component } from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

export const Error = ({ message }) => <Text style={{ color: "red" }}>{message}</Text>

export const ScreenLabel = ({ text }) => <Text style={styles.label}>{text}</Text>

export const SectionLabel = ({ text }) => <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10 }}>{text}</Text>

const styles = StyleSheet.create({
  label: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20
  }
})
