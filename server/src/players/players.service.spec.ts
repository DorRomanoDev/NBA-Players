import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as dotenv from 'dotenv';

describe('PlayersService', () => {
  let service: PlayersService;
  let axiosMock: MockAdapter;

  beforeAll(() => {
    dotenv.config();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersService,
        {
          provide: 'BASE_URL',
          useValue: process.env.BALLDONTLIE_BASE_URL,
        },
        {
          provide: 'ACCESS_TOKEN',
          useValue: process.env.ACCESS_TOKEN,
        },
      ],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  it('should return player data', async () => {
    const search = 'Stephen';
    const perPage = 25;
    const cursor = 0;
    const mockPlayerData = {
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

    axiosMock.onGet(`${process.env.BALLDONTLIE_BASE_URL}/players`, {
      params: { search, per_page: perPage, cursor },
      headers: {
        Authorization: process.env.ACCESS_TOKEN,
      },
    }).reply(200, mockPlayerData);

    const result = await service.getPlayer(search, perPage, cursor);

    expect(result).toEqual(mockPlayerData);
  });

});
