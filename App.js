import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState();
  const [scannedDataType, setScannedDataType] = useState();

  useEffect(() => {
    // request camera permission
    const requestCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted"); //sets hasPermission to true is the condition is met
    };
    requestCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    setScannedDataType(type);
  };

  // show a screen if the permission has not been granted or was denied
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject} // make the camera cover the full screen
        />
      )}
      {scanned && (
        <View>
          <Text>Qrcode data is: {scannedData}</Text>
          <Text>Qrcode Type is: {scannedDataType}</Text>
          <Button
            title="Scan"
            onPress={() => setScanned(false)} // sets the scanned to false so we scan again
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
