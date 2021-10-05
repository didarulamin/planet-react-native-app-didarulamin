import React from "react";
import { StyleSheet, View, Text as RNText } from "react-native";

// import { mergeAll, flatten } from "ramda";
import { presets } from "./text.preset";

const Text = ({ children, preset = "default", style }) => {
  const styles = StyleSheet.compose(presets[preset], style);
  return (
    <View>
      <RNText style={styles}>{children}</RNText>
    </View>
  );
};

export default Text;
