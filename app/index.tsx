import React from "react";

import { Link } from "expo-router";
import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

// import { Container } from './styles';

export default function app() {
  return (
    <View>
      <ThemedText>{"onboarding screen"}</ThemedText>
      <Link href={"(tabs)"}>{"Go to home screen!"}</Link>
    </View>
  );
}
