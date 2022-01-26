import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");
const Card = ({ place, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", place)}
    >
      <ImageBackground source={place.image} style={styles.cardImage}>
        <Text style={styles.text}>{place.name}</Text>
        <View style={styles.place}>
          <View style={styles.icon}>
            <Icon name="place" size={18} color={COLORS.white} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>
              {place.location}
            </Text>
          </View>
          <View style={styles.icon}>
            <Icon name="star" size={18} color={COLORS.white} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  place: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon: {
    flexDirection: "row",
  },
});
