import React from "react";
import {
  Pressable,
  Modal,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { spacing } from "./../../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./../../theme/colors";
import Text from "../text/text";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Button from "../Button/Button";

const FilterModal = ({
  filterPlanets,
  resetFilter,
  modalVisible,
  setModalVisible,
  rotationTime,
  setRotationTime,
  radius,
  setRadius,
}) => {
  const { height, width } = useWindowDimensions();

  const onPressFilter = () => {
    filterPlanets({ rotationTime, radius });
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.darkGrey,
              height: height / 2,

              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 20,
                  justifyContent: "space-between",
                }}
              >
                <Text preset="h2">Filter</Text>
                <Pressable onPress={() => setModalVisible(false)}>
                  <AntDesign name="closecircleo" size={30} color="white" />
                </Pressable>
              </View>

              <View style={{ margin: 20 }}>
                <Text>Filter by rotation time</Text>
                <Text preset="h4">
                  {`Rotation time : ${rotationTime[0]} - ${rotationTime[1]}`}
                </Text>
                <MultiSlider
                  markerStyle={{
                    ...Platform.select({
                      ios: {
                        height: 30,
                        width: 30,
                        shadowColor: "#000000",
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowRadius: 1,
                        shadowOpacity: 0.1,
                      },
                      android: {
                        height: 30,
                        width: 30,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                      },
                    }),
                  }}
                  values={rotationTime}
                  onValuesChange={(values) => setRotationTime(values)}
                  step={10}
                  min={10}
                  max={500}
                  containerStyle={{ marginHorizontal: 12 }}
                />
              </View>
              <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Text>Filter by radius</Text>
                <Text preset="h4">{`Radius : ${radius[0]} - ${radius[1]}`}</Text>
                <MultiSlider
                  markerStyle={{
                    ...Platform.select({
                      ios: {
                        height: 30,
                        width: 30,
                        shadowColor: "#000000",
                        shadowOffset: {
                          width: 0,
                          height: 3,
                        },
                        shadowRadius: 1,
                        shadowOpacity: 0.1,
                      },
                      android: {
                        height: 30,
                        width: 30,
                        borderRadius: 50,
                        backgroundColor: "#1792E8",
                      },
                    }),
                  }}
                  values={radius}
                  onValuesChange={(values) => setRadius(values)}
                  step={100}
                  min={5000}
                  max={15000}
                  containerStyle={{ marginHorizontal: 12 }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  margin: 25,
                }}
              >
                <Button onPress={onPressFilter} title="Filter" />

                <Button onPress={resetFilter} title="Reset Filter" />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ alignSelf: "flex-end", margin: 15 }}>
        <Pressable onPress={(onPress = () => setModalVisible(true))}>
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
    </View>
  );
};

export default FilterModal;
