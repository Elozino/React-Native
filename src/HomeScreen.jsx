import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import COLORS from "./constant/colors";
import plants from "./constant/plants";

const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
const width = Dimensions.get("screen").width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  // Internal Component
  const CategoryList = () => (
    <View style={styles.categoryContainer}>
      {categories.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setCategoryIndex(i)}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.categoryText,
              categoryIndex === i && styles.categoryTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Internal Component
  const Card = ({ plant }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Desc", plant)}>
      <View style={styles.card}>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: plant.like
                ? "rgba(245, 42, 42, 0.2)"
                : "rgba(0,0,0,0.2)",
            }}
          >
            <MaterialIcons
              name="favorite"
              size={16}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{ height: 100, alignItems: "center" }}>
          <Image
            style={{ flex: 1, resizeMode: "contain" }}
            source={plant.img}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            {plant.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            ${plant.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 34, fontWeight: "bold", color: COLORS.green }}
          >
            Zee Plant Shop
          </Text>
        </View>
        <Entypo name="shopping-cart" size={22} color="black" />
      </View>
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <View style={styles.serachContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={25} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 20,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <Card plant={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serachContainer: {
    height: 40,
    backgroundColor: COLORS.light,
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    backgroundColor: COLORS.green,
    height: 40,
    width: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  categoryText: {
    fontWeight: 20,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    // marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
