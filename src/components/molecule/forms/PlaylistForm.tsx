import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { PlaylistPost } from "../../../interface/utils";

const PlaylistForm = ({
  valueForm,
  handleSubmit,
  handleForm,
  isLoading,
}: PlaylistPost) => {
  const select = useAppSelector((state) => state.Track.selectSong);
  return (
    <form onSubmit={handleSubmit}>
      {/* title */}
      <FormControl>
        <FormLabel htmlFor="TItle">TItle</FormLabel>
        <Input
          id="TItle"
          type="text"
          name="title"
          value={valueForm.title}
          onChange={handleForm}
        />

        <FormHelperText>
          Enter the Titile And Minimun 10 character
        </FormHelperText>
      </FormControl>
      {/* des */}
      <FormControl>
        <FormLabel htmlFor="Description">Description</FormLabel>
        <Textarea
          id="Description"
          name="description"
          value={valueForm.description}
          onChange={handleForm}
        />
        <FormHelperText>
          Isi Title dan description serta cari dan select dulu songnya
        </FormHelperText>
        <Button
          _light={{ color: "black" }}
          type="submit"
          mt="3"
          isLoading={isLoading}
          loadingText="Submitting"
          colorScheme="blue"
          isDisabled={
            !(
              valueForm.title.length >= 10 &&
              valueForm.description !== "" &&
              select.length !== 0
            )
          }
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default PlaylistForm;
