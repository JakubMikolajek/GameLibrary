import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import GameDetail from "../GameDetail";

const GameItem = ({id, title, imageUrl, developers, publisher, description}) => {
    const navigation = useNavigation()

    const selectGameHandler = () => {
        navigation.navigate('GameDetail', {
            gameId: id
        })
    }

    return (
        <View>
            <Pressable>
                <View>
                    <View>
                        <Image source={{uri: imageUrl}}/>
                        <Text>{title}</Text>
                    </View>
                    <GameDetail developers={developers} publisher={publisher} description={description}/>
                </View>
            </Pressable>
        </View>
    )
}

export default GameItem

const styles = StyleSheet.create({})