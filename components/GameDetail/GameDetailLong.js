import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const GameDetailLong = ({developers, publisher, description}) => {
    return (
        <View style={styles.details}>
            <View style={styles.devInfo}>
                <Text style={styles.devItem}>Deweloper: {developers}</Text>
                <Text style={styles.devItem}>Wydawca: {publisher}</Text>
            </View>
            <Text style={styles.detailItem}>{description}</Text>
        </View>
    )
}

export default GameDetailLong

const styles = StyleSheet.create({
    details: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    devItem: {
        marginHorizontal: 4,
        fontSize: 16,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize: 14
    },
    devInfo:{
        marginBottom: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})