import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const GameDetail = ({developers, publisher, description, style, textStyle}) => {
    return (
        <View>
            <Text>{developers}</Text>
            <Text>{publisher}</Text>
            <Text>{description}</Text>
        </View>
    )
}

export default GameDetail

const styles = StyleSheet.create({})