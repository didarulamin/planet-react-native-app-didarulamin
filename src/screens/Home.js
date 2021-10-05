import React from "react";
import { Button, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Text from "../components/text/text";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header></Header>

      <Pressable onPress={() => navigation.navigate("Details")}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
