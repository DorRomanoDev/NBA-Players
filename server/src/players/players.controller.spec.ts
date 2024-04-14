import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { GetPlayerDto } from './players.dto'; // Import the DTO

describe('PlayersController', () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [
        {
          provide: PlayersService,
          useValue: {
            getPlayer: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPlayer', () => {
    it('should return player data', async () => {
      const search = 'Stephen Curry';
      const per_page = 25;
      const cursor = 1;
      const mockResponse = {
        data: [
          {
            id: 19,
            first_name: 'Stephen',
            last_name: 'Curry',
            position: 'G',
            height: '6-2',
            weight: '185',
            jersey_number: '30',
            college: 'Davidson',
            country: 'USA',
            draft_year: 2009,
            draft_round: 1,
            draft_number: 7,
            team: {
              id: 10,
              conference: 'West',
              division: 'Pacific',
              city: 'Golden State',
              name: 'Warriors',
              full_name: 'Golden State Warriors',
              abbreviation: 'GSW'
            }
          }
        ],
        meta: {
          next_cursor: 25,
          per_page: 25
        }
      };

      (service.getPlayer as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await controller.getPlayer({ search, per_page, cursor } as GetPlayerDto);
      console.log({ result });

      expect(result).toEqual(mockResponse);
      expect(service.getPlayer).toHaveBeenCalledWith(search, per_page, cursor);
    });

  })
});
