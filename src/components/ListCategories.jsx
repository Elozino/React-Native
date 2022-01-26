import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const ListCategories = () => {
  const categoryIcons = [
    <Icon name="flight" size={23} color={COLORS.primary} />,
    <Icon name="beach-access" size={23} color={COLORS.primary} />,
    <Icon name="near-me" size={23} color={COLORS.primary} />,
    <Icon name="place" size={23} color={COLORS.primary} />,
  ];
  return (
    <View style={styles.container}>
      {categoryIcons.map((icon, i) => (
        <View key={i} style={styles.iconContainer}>
          {icon}
        </View>
      ))}
    </View>
  );
};

export default ListCategories;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
