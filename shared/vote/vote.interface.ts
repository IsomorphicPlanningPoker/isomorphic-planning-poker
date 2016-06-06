import { Player } from './../player';
import { Story } from './../story';

export interface Vote {
  _id?: string;
  player: Player;
  vote: number;
  story: Story;
}
