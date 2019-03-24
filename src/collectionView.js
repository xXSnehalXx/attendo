/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default class ColView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Row />
        <Row />
      </View>
    );
  }
}

const Row = () => {
  return (
    <View style={styles.row}>
      <View style={styles.cell} />
      <View style={styles.cell} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  cell: {
    flex: 1,
    backgroundColor: "white",
    margin: 0.7
  },
  row: {
    height: 40,
    backgroundColor: "rgba(52, 52, 52,0.5)",
    borderWidth: 0.2,
    flexDirection: "row"
  }
});
