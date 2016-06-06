/// <reference path="../../typings/index.d.ts"/>
import { GameService } from './game.service';


describe('game service:', () => {
  let defaultState = {
    '_id': 0,
    'name': undefined,
    'stories': [],
    'activeStory': ''
  };
  let defaultStory = {
    _id: '123',
    name: 'test',
    votes: [],
  };

  it('should create a new story', () => {
    let afterState = {
      '_id': 0,
      'name': undefined,
      'stories': [
        {
          _id: '123',
          name: 'test',
          votes: [],
        }
      ],
      'activeStory': ''
    };

    const initialState = defaultState;
    expect(GameService.addStory(initialState, defaultStory)).toEqual(afterState);
  });
});
