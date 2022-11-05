import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import GameDetailShort from "../GameDetail/GameDetailShort";

const GameItem = ({id, title, imageUrl, developers, publisher, description}) => {
    const navigation = useNavigation()

    const selectGameHandler = () => {
        navigation.navigate('GameDetailShort', {
            gameId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                       onPress={selectGameHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <GameDetailShort developers={developers} publisher={publisher} description={description}/>
                </View>
            </Pressable>
        </View>
    )
}

export default GameItem

const styles = StyleSheet.create({
    mealItem: {
        marginHorizontal: 4,
        marginVertical: 16,
        borderRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 400,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 8,
        marginBottom: 0
    },
})