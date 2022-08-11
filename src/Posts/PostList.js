import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { postSelector } from "../redux/reducer";
import { Container, Box, Button } from "@mui/material";
import {NavLink} from 'react-router-dom'


const PostList = () => {
  const posts = useSelector(postSelector);
  
  return (
    <Container>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Button><NavLink to = "/addform">+ Add post</NavLink></Button>
      </Box>
     
      {posts.map((post) => {
        return <Post post={post} key={post.id} />
        
      })}
    </Container>
  );
};

export default PostList;
