import {Image, ScrollView, StyleSheet, Text} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/favorite";
import Icon from "../components/UI/Icon";
import GameDetailLong from "../components/GameDetail/GameDetailLong";
import {useQuery} from "@tanstack/react-query";
import {getAllGames} from "../supabase/supabaseHelpers";


const GameDetailScreen = ({route, navigation}) => {
    const favoriteGamesIds = useSelector((state) => state.favoriteGames.ids)
    const profileStatus = useSelector((state) => state.account.status)
    const dispatch = useDispatch()

    const {
        data: allGamesData,
    } = useQuery(['games'], () => getAllGames(), {enabled: false})

    const games = allGamesData.data

    const gameId = route.params.gameId
    const selectedGame = games.find((game) => game.id === gameId)
    const gameIsFav = favoriteGamesIds.includes(gameId)

    const favoriteChangeHandler = () => {
        if (gameIsFav) {
            dispatch(removeFavorite({id: gameId}))
        } else {
            dispatch(addFavorite({id: gameId}))
        }
    }

    useLayoutEffect(() => {
        if (profileStatus === true) {
            navigation.setOptions({
                headerRight: () => {
                    return (
                        <Icon icon={gameIsFav ? "heart" : "heart-outline"} color="black"
                              onPress={favoriteChangeHandler}/>
                    )
                }
            })
        }
    }, [navigation, favoriteChangeHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedGame.imageUrl}}/>
            <Text style={styles.title}>{selectedGame.title}</Text>
            <GameDetailLong
                developers={selectedGame.developers}
                publisher={selectedGame.publisher}
                description={selectedGame.description}
            />
        </ScrollView>
    )
}

export default GameDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 450
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black',
    },
})