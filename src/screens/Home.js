import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Text from "../components/text/text";
import { PLANET_LIST } from "./../data/planetData";
import { spacing } from "./../theme/spacing";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [data, setData] = React.useState(PLANET_LIST);
  const [modalVisible, setModalVisible] = React.useState(false);

  const filterData = (text) => {
    let list = PLANET_LIST.filter((element) =>
      element.name.includes(text.toLowerCase())
    );
    setData(list);
  };

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

  const FilterModal = ({ visible }) => {
    return <Modal isVisible={visible}></Modal>;
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <Pressable style={{ backgroundColor: "#000", margin: 15 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "white",
            padding: 20,
            borderRadius: 15,
            color: "white",
          }}
          keyboardType="default"
          placeholder="Search"
          placeholderTextColor="#ffff"
          onChangeText={(text) => filterData(text)}
        />
      </Pressable>
      <View>
        <FlatList
          data={data}
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
      <Pressable
        onPress={(onPress = () => setModalVisible(true))}
        style={{ alignItems: "flex-end", padding: spacing[4] }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="filter" size={24} color="black" />
        </View>
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
