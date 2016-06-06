/// <reference path="../../typings/index.d.ts"/>
import { StoryService, Story } from './';
import * as Mocks from '../utils/mocks';

describe('story service:', () => {
  it('should add a new vote', () => {
    let afterState: Story = Object.assign({}, Mocks.story, {
      'votes': [
        {
          _id: 'testvoteid',
          player: {
            _id: 'testplayerid',
            name: 'testplayername'
          },
          vote: 1,
          story: {
            _id: 'teststoryid',
            name: 'teststoryname'
          }
        }
      ]
    });

    expect(StoryService.addVote(Mocks.story, Mocks.newVote)).toEqual(afterState);
  });

  it('should edit an existing vote', () => {
    let edditedVote = Object.assign({}, Mocks.newVote, { vote: 3 });

    let afterState: Story = Object.assign({}, Mocks.storyWithVote, {
      'votes': [
        edditedVote
      ]
    });

    expect(StoryService.editVote(Mocks.storyWithVote, edditedVote)).toEqual(afterState);
  });

});
