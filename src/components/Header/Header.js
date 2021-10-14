import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, colors } from "../../theme";
import Text from "../text/text";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Header = ({ backButton = true }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {backButton && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="left"
              size={24}
              color="white"
              style={{ marginRight: 16, top: 2 }}
            />
          </TouchableOpacity>
        )}
        <Text preset="h2">THE PLANET</Text>
      </View>

      <StatusBar backgroundColor="#61dafb" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: spacing[6],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    backgroundColor: colors.black,
  },
});

export default Header;
