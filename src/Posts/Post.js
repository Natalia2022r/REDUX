import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost, likePost } from "../redux/action";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import{Container, Box} from "@mui/material";
import {ChatBubbleOutlineTwoTone, FavoriteBorderTwoTone, PresentToAllTwoTone} from "@mui/icons-material"




const Post = ({ post }) => {
    const dispatch = useDispatch();
    const { userName, userNickName,postText, userImage, postDate, likes, comments } = post;

    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
  

    const id = post.id;
    const handleLike = () => {
        setLiked(!liked);
        dispatch(likePost(id, liked));
    };
    const handleComment = () => {
        setCommented(!commented);
        dispatch(commentPost(id, commented));
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
       
          <Card sx={{ maxWidth: 400}}>
          <CardMedia>{userImage  && (
        <CardMedia component="img" image={userImage} alt="Content" />
       )}</CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {userNickName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {postText}
            </Typography>
          <Typography>{postDate}</Typography>
          </CardContent>
          <CardActions>
      
           <Button
      sx={{ display: "flex"}}
      onClick={handleLike}
     >
                    <FavoriteBorderTwoTone/>
                    <Typography sx={{ ml: 2 }}>{likes}</Typography>
                   </Button>
                   <Button
      sx={{ display: "flex"}}
      onClick={handleComment}
     >
                    <ChatBubbleOutlineTwoTone/>
                    <Typography sx={{ ml: 2 }}>{comments}</Typography>
                    </Button>
                    <Button
      sx={{ display: "flex"}}
      
     >
                    <Typography sx={{ ml: 2 }}>
          <PresentToAllTwoTone/>
          </Typography>
          </Button>
          </CardActions>
        </Card>
        </Box>
        </Container>
    
    
    );
};

export default Post;