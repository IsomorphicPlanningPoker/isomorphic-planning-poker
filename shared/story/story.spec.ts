/// <reference path="../../typings/index.d.ts"/>

import { StoryService, Story } from './';
import { Vote } from '../vote/vote.interface';
import * as Mocks from '../utils/mocks';

describe('StoryService:', () => {

  it('should add a new vote', () => {
    expect(StoryService.addVote(Mocks.story, Mocks.vote)).toEqual(Mocks.storyWithVote);
  });

  it('should edit an existing vote', () => {
    let editedVote: Vote = Object.assign({}, Mocks.vote, { vote: 3 });

    let afterState: Story = Object.assign({}, Mocks.storyWithVote, { votes: [ editedVote ] });

    expect(StoryService.editVote(Mocks.storyWithVote, editedVote)).toEqual(afterState);
  });

});
