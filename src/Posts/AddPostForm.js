import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { postSelector, userSelector } from "../redux/reducer";
import { addNewPost } from "../redux/action";
import { Container, Box, Button, Stack, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const PostForm = () => {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [selectUser, setSelectUser] = useState("Ray Skywalker");

  const posts = useSelector(postSelector);
  const users = useSelector(userSelector);
  const id = posts.length - 1;
  const { RaySkywalker, AnakinSkywalker } = users;

  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleInputImage = (e) => {
    setInputImage(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectUser(e.target.value);
  };

  const checkInputs = () => {
    if (!inputText) {
      setInputText("Lorem ipsum");
    }
    if (!inputImage) {
      setInputImage("https://source.unsplash.com/random");
    }
  };
  checkInputs();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs();
    if (selectUser === "Ray Skywalker") {
      dispatch(
        addNewPost(
          id,
          inputText,
          inputImage,
          RaySkywalker.userName,
          RaySkywalker.userNickName,
      
        )
      );
    } else {
      dispatch(
        addNewPost(
          id,
          inputText,
          inputImage,
          AnakinSkywalker.userName,
          AnakinSkywalker.userNickName,
   
        )
      );
    }
  };
  return (
    <Container>
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} sx={{ minWidth: "400px", pt: "40px" }}>
          <TextField
            placeholder="Text"
            onChange={handleInputText}
            type="text"
            fullWidth
          />
          <TextField
            placeholder="image URL"
            onChange={handleInputImage}
            type="text"
            fullWidth
          />
          <select 
          style={{wight: "400px", height: "50px" }}
          defaultValue={"Ray Skywalker"} onChange={handleSelect}>
            <option>Anakin Skywalker</option>
            <option>Ray Skywalker</option>
          </select>

          <Button onClick={handleSubmit} type="submit">
            <NavLink to="/">Створити пост</NavLink>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default PostForm;
