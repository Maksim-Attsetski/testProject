import {ISong} from './song.types';

export interface IPlaylist {
  id: string;
  name: string;
  tracks: ISong[];
  author_id: {
    first_name: string;
    last_name: string;
    id: string;
    email: string;
  };
}
