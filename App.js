import React from 'react'
import { View, StyleSheet } from 'react-native'
import Calc from './components/calc'

export default () => 
    <View style={style.App}>
        <Calc />
    </View>

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#000",
    }
})