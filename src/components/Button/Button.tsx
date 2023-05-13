import React from "react"
import { TouchableHighlight, Text } from "react-native"
import { buttonStyles } from "./Button.styles"

export interface ButtonProps {
  onPress: (label: string) => void
  label: string
  operationButton?: boolean
  buttonDouble?: boolean
  buttonTriple?: boolean
}

export const Button = ({
  onPress,
  label,
  operationButton,
  buttonDouble,
  buttonTriple
}: ButtonProps) => {
  const allButtonStyles = buttonStyles({
    operationButton,
    buttonDouble,
    buttonTriple
  })

  return (
    <TouchableHighlight onPress={() => onPress(label)}>
      <Text style={allButtonStyles}>{label}</Text>
    </TouchableHighlight>
  )
}
