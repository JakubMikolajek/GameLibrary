import {client} from "./supabase";

export const getGamesCategoriesData = async () => await client
    .from("categories")
    .select("*")

export const getAllGames = async () => await client
    .from("games")
    .select("*")