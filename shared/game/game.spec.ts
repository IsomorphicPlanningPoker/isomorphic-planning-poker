import {GameService} from './game.service';
import * as Mocks from '../utils/mocks';
import deepFreeze = require('deep-freeze');

describe('GameService:', () => {

  deepFreeze(Mocks);

  it('should create a game', () => {
    expect(GameService.createGame(null, { game: Mocks.game })).toEqual(Mocks.game);
  });

  it('should get a game', () => {
    expect(GameService.getGame(null, { game: Mocks.game })).toEqual(Mocks.game);
  });

});
