import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";
import {GAMES} from "../data/game-data";
import GamesList from "../components/GamesList/GamesList";

const FavoriteGamesScreen = () => {
    const favoriteGameIds = useSelector((state) => state.favoriteGames.ids)

    const favoriteGames = GAMES.filter((game) => favoriteGameIds.includes(game.id))

    if (favoriteGames.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>Nie masz jeszcze ulubionych gier.</Text>
            </View>
        )
    }

    return (
        <GamesList items={favoriteGames}/>
    )
}

export default FavoriteGamesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})