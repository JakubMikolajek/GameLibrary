import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";
import GamesList from "../components/GamesList/GamesList";
import {useQuery} from "@tanstack/react-query";
import {getAllGames} from "../supabase/supabaseHelpers";

const FavoriteGamesScreen = ({navigation}) => {
    const favoriteGameIds = useSelector((state) => state.favoriteGames.ids)
    const profileStatus = useSelector((state) => state.account.status)

    const {
        data: allGamesData,
    } = useQuery(['games'], () => getAllGames(), {enabled: false})

    const games = allGamesData.data

    const favoriteGames = games.filter((game) => favoriteGameIds.includes(game.id))

    if(profileStatus === false){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>Musisz się zalogować aby dodawać ulubione gry</Text>
                <Button title="Zaloguj się" onPress={() => navigation.navigate("Account")}/>
            </View>
        )
    }

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
        padding:10
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
})