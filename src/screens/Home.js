import React from "react";
import { Button, Pressable, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Text from "../components/text/text";
import { PLANET_LIST } from "./../data/planetData";
import { spacing } from "./../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

console.log(PLANET_LIST);
const Home = ({ navigation }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: spacing[1],
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("Details", { planet: item })}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: item.color,
                margin: spacing[2],
              }}
            />
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header></Header>

      <View>
        <FlatList
          data={PLANET_LIST}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.name}
          contentContainerStyle={{ padding: spacing[5] }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#979797",
              }}
            />
          )}
        />
      </View>
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
