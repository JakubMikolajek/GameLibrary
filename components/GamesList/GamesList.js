import {FlatList, StyleSheet,  View} from 'react-native'
import React from 'react'
import GameItem from "./GameItem";

const GamesList = ({items}) => {
    const renderGameItem = ({itemData}) => {
        const item = itemData.item

        const gameProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            developers: item.developers,
            publisher: item.publisher,
            description: item.description
        }
        return <GameItem {...gameProps}/>
    }
    return (
        <View>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderGameItem}/>
        </View>
    )
}

export default GamesList

const styles = StyleSheet.create({})