import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./constant/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const Description = ({ navigation, route }) => {
  const plantSent = route.params;
  // console.log(plantSent);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon
          name="shopping-cart"
          size={22}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={plantSent.img}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          {/* <View sytle={styles.line} /> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            __ Best Choice{" "}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {plantSent.name}
          </Text>
          <View style={styles.priceTag}>
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              ${plantSent.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              lineHeight: 20,
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 5,
            }}
          >
            {plantSent.about}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.increaseBtn}>
                <Text style={styles.increaseBtnText}>-</Text>
              </View>
              <Text style={{ fontSize: 18, marginHorizontal: 10 }}>1</Text>
              <View style={styles.increaseBtn}>
                <Text style={styles.increaseBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    flex: 0.60,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    borderRadius: 7,
    marginTop: 30,
    paddingTop: 30,
  },
  // line: {
  //   width: 25,
  //   height: 2,
  //   backgroundColor: COLORS.dark,
  //   marginBottom: 5,
  //   marginRight: 3,
  // },
  priceTag: {
    width: 80,
    height: 40,
    backgroundColor: COLORS.green,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  increaseBtn: {
    borderColor: COLORS.light,
    borderWidth: 2,
    width: 60,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green,
  },
  increaseBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
  buyBtn: {
    backgroundColor: COLORS.green,
    width: 130,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
