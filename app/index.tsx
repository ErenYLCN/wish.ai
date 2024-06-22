import React from "react";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/ThemedText";

export default function app() {
  return (
    <SafeAreaView>
      <ThemedText>{"onboarding screen"}</ThemedText>
      <Link href={"(tabs)"}>{"Go to home screen!"}</Link>
    </SafeAreaView>
  );
}
