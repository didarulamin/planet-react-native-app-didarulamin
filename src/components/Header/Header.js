import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, colors } from "../../theme";
import Text from "../text/text";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Text preset="h2">THE PLANET</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: spacing[6],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});

export default Header;
