import {useLayoutEffect} from "react";
import GamesList from "../components/GamesList/GamesList";
import {useQuery} from "@tanstack/react-query";
import {getAllGames, getGamesCategoriesData} from "../supabase/supabaseHelpers";
import {sortHelper} from "../helpers/sortHelpers";

const GameOverviewScreen = ({route, navigation}) => {
    const catId = route.params.categoryId;

    const {
        data: categoriesData
    } = useQuery(['categories'], () => getGamesCategoriesData(), {enabled: false})

    const {
        data: allGamesData,
    } = useQuery(['games'], () => getAllGames(), {enabled: false})

    const categories = categoriesData.data
    const games = allGamesData.data


    const displayedGames = games.filter((gameItem) => {
        return gameItem.categories.indexOf(catId) >= 0;
    });

    displayedGames.sort(sortHelper)

    useLayoutEffect(() => {
        const categoryTitle = categories.find(
            (category) => category.id === catId
        ).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <GamesList items={displayedGames}/>;
};

export default GameOverviewScreen;
