import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { PlayersService } from './players.service';
import { GetPlayerDto } from './players.dto';
import { ValidationPipe } from '../validation/validation.pipe';


@Controller('players')
export class PlayersController {
    constructor(private readonly playerService: PlayersService) { }
    @Get()
    @UsePipes(new ValidationPipe())
    async getPlayer(@Query() getPlayerDto: GetPlayerDto) {
        const { search, per_page, cursor } = getPlayerDto;
        return this.playerService.getPlayer(search, per_page, cursor);
    }
}
