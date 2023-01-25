import {FlatList, Text, View} from 'react-native'
import CategoryGrid from "../components/CategoryGrid";
import {useQuery} from "@tanstack/react-query";
import {getAllGames, getGamesCategoriesData} from "../supabase/supabaseHelpers";
import {sortHelper} from "../helpers/sortHelpers";

const CategoryScreen = ({navigation}) => {
    const {
        data: categoriesData,
        isLoading: categoriesLoading
    } = useQuery(['categories'], () => getGamesCategoriesData())
    const {
        data: allGamesData,
        isLoading: allGamesLoading
    } = useQuery(['games'], () => getAllGames())

    if (categoriesLoading || allGamesLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const categories = categoriesData.data.sort(sortHelper)

    const renderCatItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('GamesOverview', {
                categoryId: itemData.item.id
            })
        }
        return (
            <CategoryGrid title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }
    return (
        <FlatList data={categories} keyExtractor={(item) => item.id} renderItem={renderCatItem} numColumns={1} showsVerticalScrollIndicator={false}/>
    )
}

export default CategoryScreen