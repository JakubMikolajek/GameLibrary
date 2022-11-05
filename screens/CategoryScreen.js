import {FlatList} from 'react-native'
import CategoryGrid from "../components/CategoryGrid";
import {CATEGORIES} from "../data/game-data";

const CategoryScreen = ({navigation}) => {
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
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCatItem} numColumns={1}/>
    )
}

export default CategoryScreen