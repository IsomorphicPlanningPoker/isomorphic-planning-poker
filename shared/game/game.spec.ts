/// <reference path="../../typings/index.d.ts"/>
import { GameService, Game } from './';
import * as Mocks from '../utils/mocks';

describe('game service:', () => {
  it('should create a new story', () => {
    let afterState: Game = Object.assign({}, Mocks.game, {
      'stories': [
        {
          _id: '123',
          name: 'test',
          votes: [],
        }
      ]
    });

    expect(GameService.addStory(Mocks.game, Mocks.story)).toEqual(afterState);
  });

});
