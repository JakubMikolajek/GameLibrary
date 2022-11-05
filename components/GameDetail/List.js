import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
    return data.map((dataPoint) => (
        <View key={dataPoint}>
            <Text>{dataPoint}</Text>
        </View>
    ))
}

export default List

const styles = StyleSheet.create({})