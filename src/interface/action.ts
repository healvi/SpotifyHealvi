import { Track } from "./SearchData";
import { User } from "./UserData";
import { formPlaylistPost } from "./utils";

export interface createPlaylistActionProps {
  data: {
    name: string;
    description: string;
    public: boolean;
  };
  me: User;
  select: Track[];
  playlist: formPlaylistPost;
  setFromPlayList: ({ title, description }: formPlaylistPost) => void;
  setIsLoading: (loading: boolean) => void;
}
