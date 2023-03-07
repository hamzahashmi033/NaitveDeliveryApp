import { Platform,StatusBar,StyleSheet } from "react-native";

export const defaultStyle = StyleSheet.create({

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  });