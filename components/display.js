import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default props => {
    return(
        <View style={style.Display}>
            <Text style={style.DisplayText}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: "#000",
        padding: 20,
        alignSelf: "stretch"
    },
    DisplayText: {
        fontSize: 70,
        textAlign: 'right',
        color: '#FFF',
    }
})