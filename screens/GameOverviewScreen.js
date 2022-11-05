import {useLayoutEffect} from "react";
import {CATEGORIES, GAMES} from "../data/game-data";
import GamesList from "../components/GamesList/GamesList";

const GameOverviewScreen = ({route, navigation}) => {
    const catId = route.params.categoryId;

    const displayedGames = GAMES.filter((gameItem) => {
        return gameItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <GamesList items={displayedGames}/>;
};

export default GameOverviewScreen;
