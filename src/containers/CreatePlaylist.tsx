import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Textarea, Button } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { CheckIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { postNewPlaylistApi } from '../utils/api/playlistApi';
import { useAppSelector } from '../app/hooks';

const CreatePlaylist = () => {
  const token = useAppSelector((state) => state.Auth.token);
  const me = useAppSelector((state) => state.User.user);
  const [playlist, setFromPlayList] = useState({
    title: '',
    describe: '',
  });
  const handleForm = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFromPlayList({ ...playlist, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      const data = {
        name: playlist.title,
        description: playlist.describe,
        public: true,
      };
      try {
        postNewPlaylistApi(me.id, data).then(() => {
          setFromPlayList({ title: '', describe: '' });
          alert('Berhasil membuat palylist');
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const validation =
    playlist.title.length >= 10 ? (
      <CheckIcon color="green.500" />
    ) : playlist.title !== '' ? (
      <WarningTwoIcon color="red.500" />
    ) : (
      ''
    );
  const inputPlaylist = (
    <div className="mt-3">
      <h3>Input Playlist Form</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="titleplaylist" className="form-label">
            Title
          </label>
          <InputGroup>
            <Input
              name="title"
              placeholder="Enter Title"
              value={playlist.title}
              onChange={handleForm}
              aria-describedby="titleplauhelp"
              className={`form-control ${
                playlist.title.length >= 10
                  ? 'is-valid'
                  : playlist.title !== ''
                  ? 'is-invalid'
                  : ''
              }`}
            />
            <InputRightElement>{validation}</InputRightElement>
          </InputGroup>
          <div id="titleplauhelp" className="form-text">
            Minimum 10 Character
          </div>
          <div className="valid-feedback">Looks good!</div>
          <div id="titleplauhelp" className="invalid-feedback">
            Character kurang dari 10
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="descplaylist" className="form-label">
            Description
          </label>
          <Textarea
            name="describe"
            value={playlist.describe}
            onChange={handleForm}
            isRequired
          />
        </div>
        <Button
          colorScheme="blue"
          type="submit"
          isDisabled={
            !(playlist.title.length >= 10 && playlist.describe !== '')
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">{inputPlaylist}</div>
          <div className="col-md-9" />
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
