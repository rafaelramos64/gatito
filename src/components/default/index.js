import React from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native'
import globalStyles, { collors } from "../../styles"
import styles from "./style";

export default function screenDefault({ children }) {
  return <>
    <SafeAreaView style={styles.adjustScreen}>
      <StatusBar backgroundColor={collors.purple} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={globalStyles.fill}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={styles.adjustBottomScreen} />

  </>
}