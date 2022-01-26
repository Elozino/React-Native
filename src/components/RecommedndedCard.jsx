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
const width = Dimensions.get("screen").width - 40;

const RecommedndedCard = ({ place }) => {
  return (
    <ImageBackground source={place.image} style={styles.container}>
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
      <Text style={{ color: COLORS.white, fontSize: 13 }}>
        {place.details}
      </Text>
    </ImageBackground>
  );
};

export default RecommedndedCard;

const styles = StyleSheet.create({
  container: {
    width,
    height: 200,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 20,
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
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
