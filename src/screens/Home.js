import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import Text from "../components/text/text";
import { PLANET_LIST } from "./../data/planetData";
import { spacing } from "./../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import FilterModal from "../components/Modal/FilterModal";

const Home = ({ navigation }) => {
  const [data, setData] = React.useState(PLANET_LIST);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [rotationTime, setRotationTime] = React.useState([0, 500]);
  const [radius, setRadius] = React.useState([5000, 15000]);
  const { height, width } = useWindowDimensions();

  const filterData = (text) => {
    let list = PLANET_LIST.filter((element) =>
      element.name.includes(text.toLowerCase())
    );
    setData(list);
  };

  const filterPlanets = (data) => {
    const { rotationTime, radius } = data;
    const filterPlanets = PLANET_LIST.filter((item) => {
      return (
        item.rotationTime >= rotationTime[0] &&
        item.rotationTime <= rotationTime[1] &&
        item.radius >= radius[0] &&
        item.radius <= radius[1]
      );
    });
    setData(filterPlanets);
    setModalVisible(!modalVisible);
  };

  const resetFilter = () => {
    setData(PLANET_LIST);
    setRotationTime([0, 500]);
    setRadius([5000, 15000]);
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

  return (
    <View style={styles.container}>
      <View style={{ height: height - 100 }}>
        <Header backButton={false}></Header>

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
      </View>

      <FilterModal
        filterPlanets={filterPlanets}
        resetFilter={resetFilter}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        rotationTime={rotationTime}
        setRotationTime={setRotationTime}
        radius={radius}
        setRadius={setRadius}
      />
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
