import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const GameDetailShort = ({developers, publisher, description}) => {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>Developer: {developers}</Text>
            <Text style={styles.detailItem}>Publisher: {publisher}</Text>
        </View>
    )
}

export default GameDetailShort

const styles = StyleSheet.create({
    details: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        height: 60
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})