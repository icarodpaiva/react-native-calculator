import { StyleSheet, Dimensions } from "react-native"
import type { StyleProp, TextStyle } from "react-native"

interface StylesParams {
  operationButton?: boolean
  buttonDouble?: boolean
  buttonTriple?: boolean
}

export const buttonStyles = ({
  buttonDouble,
  buttonTriple,
  operationButton
}: StylesParams) => {
  const styles = StyleSheet.create({
    button: {
      width: Dimensions.get("window").width / 4,
      height: Dimensions.get("window").width / 4,
      borderWidth: 1,
      borderColor: "#888",
      padding: 20,
      backgroundColor: "#f0f0f0",
      fontSize: 40,
      textAlign: "center"
    },
    operationButton: {
      backgroundColor: "#fa8231",
      color: "#fff"
    },
    buttonDouble: {
      width: (Dimensions.get("window").width / 4) * 2
    },
    buttonTriple: {
      width: (Dimensions.get("window").width / 4) * 3
    }
  })

  const allButtonStyles: StyleProp<TextStyle>[] = [styles.button]

  if (operationButton) {
    allButtonStyles.push(styles.operationButton)
  }

  if (buttonDouble) {
    allButtonStyles.push(styles.buttonDouble)
  }

  if (buttonTriple) {
    allButtonStyles.push(styles.buttonTriple)
  }

  return allButtonStyles
}
