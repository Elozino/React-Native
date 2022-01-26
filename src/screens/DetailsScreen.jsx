import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  // StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const placeSent = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
      <ImageBackground source={placeSent.image} style={styles.imageBG}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={25}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon
            name="more-vert"
            size={25}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View></View>
          <View style={styles.imageDetails}>
            <Text style={styles.text}>{placeSent.name}</Text>
            <View style={styles.icon}>
              <Icon name="star" size={18} color={COLORS.orange} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.iconConatiner}>
          <Icon name="favorite" size={30} color={COLORS.red} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}>
          <Icon name="place" size={18} color={COLORS.primary} />
          <Text style={{ color: COLORS.primary, marginLeft: 5, fontWeight: "bold", fontSize: 18, }}>
            {placeSent.location} 
          </Text>
        </View>
        <Text style={{marginTop: 10, fontWeight: "bold", fontSize: 18}}>About the trip</Text>
        <Text style={{marginTop: 10, lineHeight: 20}}>{placeSent.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
          <Text style={{fontWeight: "bold", color: COLORS.white, fontSize: 16}}>$100</Text>
          <Text style={{fontWeight: "bold", color: COLORS.grey, fontSize: 16, marginLeft: 5}}>/ PER DAY</Text>
        </View>
        <View style={styles.bookNow}>
          <Text style={{color: COLORS.primary, fontWeight: "bold", fontSize: 16}}>Book Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageBG: {
    flex: 0.7,
    width: "100%",
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    width: "70%",
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 70,
  },
  icon: {
    flexDirection: "row",
    marginTop: 10,
  },
  detailsContainer: {
    flex: 0.3,
    top: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  iconConatiner: {
    height: 50,
    width: 50,
    position: "absolute",
    top: -30,
    right: 20,
    elevation: 10,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bookNow:{
    height: 40,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});
