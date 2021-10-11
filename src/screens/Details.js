import React from "react";
import { StyleSheet, View, ScrollView, Linking, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Earth,
  Mars,
  Mercury,
  Saturn,
  Venus,
  Neptune,
  Uranus,
  Jupiter,
} from "../../assets/SVGComponents/indexsvg";
import Header from "../components/Header/Header";
import Text from "../components/text/text";
import { spacing } from "./../theme/spacing";

const Details = ({ route }) => {
  const { planet } = route.params;
  const {
    name,
    surfaceImage,
    description,
    rotationTime,
    revolutionTime,
    avgTemp,
    radius,
    wikiLink,
  } = planet;

  const getSVG = (name) => {
    switch (name) {
      case "earth":
        return <Earth />;
      case "mars":
        return <Mars />;
      case "mercury":
        return <Mercury />;
      case "neptune":
        return <Neptune />;
      case "saturn":
        return <Saturn />;
      case "venus":
        return <Venus />;
      case "jupiter":
        return <Jupiter />;
      case "uranus":
        return <Uranus />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <ScrollView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
          {getSVG(name)}
        </View>

        <Text
          preset="h1"
          style={{
            textAlign: "center",
            marginTop: spacing[4],
            textTransform: "uppercase",
          }}
        >
          {name}
        </Text>
        <Text
          style={{ textAlign: "center", marginTop: spacing[4], fontSize: 18 }}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: spacing[2],
          }}
        >
          <Text>Source: </Text>
          <Pressable onPress={() => Linking.openURL(wikiLink)}>
            <Text style={{ textDecorationLine: "underline" }}>Wikipedia</Text>
          </Pressable>
        </View>

        <View style={{ justifyContent: "center", margin: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderColor: "grey",
              margin: 10,
              padding: 15,
            }}
          >
            <Text style={{ textTransform: "uppercase", color: "grey" }}>
              Rotation Time
            </Text>
            <Text preset="h2" style={{ textTransform: "uppercase" }}>
              {rotationTime}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "grey",
              margin: 10,
              padding: 15,
            }}
          >
            <Text style={{ textTransform: "uppercase", color: "grey" }}>
              Revolution Time
            </Text>
            <Text preset="h2" style={{ textTransform: "uppercase" }}>
              {revolutionTime}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "grey",
              margin: 10,
              padding: 15,
            }}
          >
            <Text style={{ textTransform: "uppercase", color: "grey" }}>
              Radius
            </Text>
            <Text preset="h2" style={{ textTransform: "uppercase" }}>
              {radius}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "grey",
              margin: 10,
              padding: 15,
            }}
          >
            <Text style={{ textTransform: "uppercase", color: "grey" }}>
              Average Time
            </Text>
            <Text preset="h2" style={{ textTransform: "uppercase" }}>
              {avgTemp}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default Details;
