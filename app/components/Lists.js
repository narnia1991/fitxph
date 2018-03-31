import React, { Component } from "react";
import { Content } from "native-base";
import { Body, List, ListItem, Right, Text } from "native-base";

const Lists = ({ items, keyValue, subKey }) => {
  if (items) {
    return (
      <List
        dataArray={items}
        renderRow={(item, index) => (
          <ListItem >
            <Body>
              <Text>{item[keyValue]}</Text>
            </Body>
            <Right>
              <Text note>{item[subKey]}</Text>
            </Right>
          </ListItem>
        )}
      />
    )
  } else {
    return <Text>No data available</Text>
  }
}

export default Lists
