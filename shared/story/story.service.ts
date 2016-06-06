import { Story } from './story.interface';

export class StoryService {

  addStory(state, story: Story) {

    return Object.assign({}, state, { stories: [
      ...state.stories,
      story
    ]});
  }
}
