import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PlayersService {

    private readonly baseUrl: string
    private readonly accessToken: string;

    constructor() {
        this.accessToken = process.env.ACCESS_TOKEN || '';
        this.baseUrl = process.env.BALLDONTLIE_BASE_URL || '';
    }

    async getPlayer(search: string, per_page: number, cursor: number) {
        try {
            const params: Record<string, any> = { search, per_page, cursor: cursor };
            const response = await axios.get(`${this.baseUrl}/players`, {
                params,
                headers: {
                    Authorization: `${this.accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch player data: ${error.message}`);
        }
    }

}
