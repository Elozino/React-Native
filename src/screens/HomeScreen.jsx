import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import COLORS from "../constants/colors";
import places from "../constants/places";
import ListCategories from "../components/ListCategories";
import Card from "../components/Card";
import RecommedndedCard from "../components/RecommedndedCard";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="light"
        translucent={true}
        backgroundColor={COLORS.primary}
        color={COLORS.white}
      />
      <View style={styles.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scroll}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>beautiful places</Text>
            <View style={styles.inputContainer}>
              <Icon name="search" size={26} />
              <TextInput placeholder="Search Input" style={{ color: "grey" }} />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={styles.sectionTitle}>Place</Text>
        <View>
          <FlatList
            data={places}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
            }}
            renderItem={({ item }) => (
              <Card place={item} navigation={navigation} />
            )}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            data={places}
            horizontal={true}
            snapToInterval={width - 20}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              paddingBottom: 20,
            }}
            renderItem={({ item }) => <RecommedndedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  scroll: {
    backgroundColor: COLORS.primary,
    height: 120,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 25,
    // fontWeight: "bold",
  },
  inputContainer: {
    height: 60,
    backgroundColor: COLORS.white,
    width: "100%",
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 5,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
});
