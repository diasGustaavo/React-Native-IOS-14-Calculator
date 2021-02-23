import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Dimensions, View } from 'react-native'

export default props => {
    let styleButton = [ styles.button ]
    if (props.largeButton) styleButton.push(styles.largeButton)
    if (props.ExtraLargeButton) styleButton.push(styles.extraLargeButton)
    if (props.operador) styleButton.push(styles.Operador)
    if (props.operadorEsp) styleButton.push(styles.OperadorEsp)
    return(
        <View style={styles.viewSpec}>
          <TouchableOpacity
              style={styleButton} 
              onPress={function() {
                  props.funcao(props.content)
              }} 
          >
              <Text style={styles.Text}>{props.content}</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  viewSpec: {
    borderRadius:5000,
  },
  button: {
    margin: 5,
    borderRadius:5000,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#333333',
    height: Dimensions.get('window').width / 4.8,
    width: Dimensions.get('window').width / 4.8,
  },
  largeButton: {
    width: (Dimensions.get('window').width / 4.8) * 2.18,
  },
  extraLargeButton: {
    width: (Dimensions.get('window').width / 4.8 ) * 3,
  },
  Operador: {
    backgroundColor: '#fe9505',
  },
  OperadorEsp: {
    backgroundColor: '#a5a5a5',
  },  
  Text: {
    fontSize: 32,
    color: "#ffffff"
  },
  
});