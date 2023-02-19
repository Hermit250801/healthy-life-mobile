import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headingText}>Bệnh nhân</Text>
        </View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    header: {
        height: 100,
        justifyContent: "center",
        backgroundColor: "#76b24f"
    },
    headingText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        paddingLeft: 16
    }
})