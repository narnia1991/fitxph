import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  header: {
    flexDirection: 'row'
  },
  headerItem: {
    minHeight: 30,
    backgroundColor: '#000',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataView: {
    flexGrow: 1,
    marginBottom: 10
  },
  dataViewContent: {},
  row: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf'
  },
  cell: {
    minHeight: 25,
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
