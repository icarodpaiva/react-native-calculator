import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface DisplayProps {
  displayValue: string
}

export const Display = ({ displayValue }: DisplayProps) => {
  return (
    <View style={style.display}>
      <Text style={style.displayValue} numberOfLines={1}>
        {displayValue}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  displayValue: {
    fontSize: 60,
    color: "#fff"
  }
})
