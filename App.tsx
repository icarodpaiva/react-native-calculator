import React, { useState } from "react"
import { View, StyleSheet } from "react-native"

import { Display } from "./src/components/Display"
import { Button } from "./src/components/Button/Button"

export const App = () => {
  const [displayValue, setDisplayValue] = useState("0")

  const addDigit = (label: string) => {
    setDisplayValue(prev => (prev === "0" ? label : `${prev}${label}`))
  }

  const setOperation = (opeartion: string) => {}

  const clearMemory = () => {
    setDisplayValue("0")
  }

  return (
    <View style={style.container}>
      <Display displayValue={displayValue} />

      <View style={style.buttons}>
        <Button label="AC" onPress={clearMemory} buttonTriple />
        <Button label="/" onPress={setOperation} operationButton />

        <Button label="7" onPress={addDigit} />
        <Button label="8" onPress={addDigit} />
        <Button label="9" onPress={addDigit} />
        <Button label="*" onPress={setOperation} operationButton />

        <Button label="4" onPress={addDigit} />
        <Button label="5" onPress={addDigit} />
        <Button label="6" onPress={addDigit} />
        <Button label="-" onPress={setOperation} operationButton />

        <Button label="1" onPress={addDigit} />
        <Button label="2" onPress={addDigit} />
        <Button label="3" onPress={addDigit} />
        <Button label="+" onPress={setOperation} operationButton />

        <Button label="0" onPress={addDigit} />
        <Button label="." onPress={addDigit} buttonDouble />
        <Button label="=" onPress={setOperation} operationButton />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})
