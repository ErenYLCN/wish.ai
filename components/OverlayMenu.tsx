import React from "react";

import { View, Text } from "react-native";

export default function OverlayMenu() {
  /* TODO: Implement overlay menu
   * 1. Menu vill be visible based on a context value
   * 2. Context value will be toggled on bottom tab bar
   *
   */

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        backgroundColor: "black",
        left: 0,
        top: 0,
        opacity: 0.4,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <Text>{"Tab Layout"}</Text>
    </View>
  );
}
