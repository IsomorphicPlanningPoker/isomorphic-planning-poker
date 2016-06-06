/// <reference path="../../typings/index.d.ts"/>

import { GameService } from './game.service';
import * as Mocks from '../utils/mocks';

describe('GameService:', () => {

  it('should add a new story', () => {
    expect(GameService.addStory(Mocks.game, Mocks.story)).toEqual(Mocks.gameWithStory);
  });

  it('should remove a story', () => {
    expect(GameService.removeStory(Mocks.gameWithStory, Mocks.story)).toEqual(Mocks.game);
  });

});
