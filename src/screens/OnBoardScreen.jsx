import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/onboardImage.jpg")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.details}>
            <Text style={styles.text}>Discover</Text>
            <Text style={styles.text}>world with us</Text>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              iure voluptatem voluptatum omnis asperiores explicabo veritatis
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Home")}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  details: {
    height: "60%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  text: {
    color: COLORS.white,
    fontSize: 35,
    fontWeight: "bold",
  },
  desc: {
    color: COLORS.white,
    lineHeight: 20,
    marginTop: 10,
  },
  btn: {
    backgroundColor: COLORS.white,
    height: 40,
    width: 120,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
  },
});
