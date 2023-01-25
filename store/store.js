import {configureStore} from "@reduxjs/toolkit";

import favoritesReducer from "./favorite"
import accountReducer from "./account";

export const store = configureStore({
    reducer: {
        favoriteGames: favoritesReducer,
        account: accountReducer
    },
});
