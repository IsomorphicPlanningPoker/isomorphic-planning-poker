/// <reference path="../../typings/index.d.ts"/>
import { GameService, Game } from './';
import * as Mocks from '../utils/mocks';

describe('game service:', () => {
  it('should add story to game', () => {
    let afterState: Game = Object.assign({}, Mocks.game, {
      'stories': [
        {
          _id: 'teststoryid',
          name: 'teststoryname',
          votes: [],
        }
      ]
    });

    expect(GameService.addStory(Mocks.game, Mocks.story)).toEqual(afterState);
  });

});
