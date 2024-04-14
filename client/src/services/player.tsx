import axios from "axios";
import { PlayerResponse } from "../interfaces/Player";



const getPlayers = async (perPage: number, cursor: number, searchTerm: string) => {
    return await axios.get<PlayerResponse>(`${import.meta.env.VITE_BASE_URL}/players`, {
        params: { search: searchTerm, per_page: perPage, cursor: cursor }
    });
}

export default {
    getPlayers
}