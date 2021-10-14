import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

import { WebView } from "react-native-webview";
import Header from "../components/Header/Header";

export default function Web({ route }) {
  const { wikiLink } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header></Header>
      <WebView source={{ uri: wikiLink }} />
    </SafeAreaView>
  );
}
