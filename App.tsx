import React, { useState } from "react"
import { View, StyleSheet } from "react-native"

import { Display } from "./src/components/Display/Display"
import { Button } from "./src/components/Button/Button"

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null as null | string,
  values: [0, 0],
  current: 0 as 0 | 1
}

export const App = () => {
  const [state, setState] = useState({ ...initialState })

  const addDigit = (digit: string) => {
    const clearDisplay = state.displayValue === "0" || state.clearDisplay

    if (digit === "." && !clearDisplay && state.displayValue.includes(".")) {
      return
    }

    const currentValue = clearDisplay ? "" : state.displayValue
    const displayValue = currentValue + digit

    setState({ ...state, displayValue, clearDisplay: false })

    if (digit !== ".") {
      const newValue = parseFloat(displayValue)
      const values = [...state.values]
      values[state.current] = newValue

      setState({ ...state, displayValue, clearDisplay: false, values })
    }
  }

  const clearMemory = () => {
    setState({ ...initialState })
  }

  const setOperation = (operation: string) => {
    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === "="
      const values = [...state.values]

      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
      } catch {
        values[0] = state.values[0]
      }

      values[1] = 0

      setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  return (
    <View style={style.container}>
      <Display displayValue={state.displayValue} />

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
