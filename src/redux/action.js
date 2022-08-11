import { ADD_POST, COMMENT_POST, LIKE_POST, REPOST_POST} from "./type";
import {formatRelative, subDays} from "date-fns"

export const addNewPost = (id, text, image, userName, userNickName, postDate) => {
    return {
        type: ADD_POST,
        post: {
            id,
            userName,
            userNickName,
            postDate:formatRelative(subDays(new Date(), 0), new Date()),
            postText: text,
            userImage: image,
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 100),
         
        },
    };
};


export const likePost = (id, liked) => {
    return {
        type: LIKE_POST,
        payload: {
            id,
            liked,
        },
    };
};
export const commentPost = (id, commented) => {
    return {
        type: COMMENT_POST,
        payload: {
            id,
            commented,
        },
    };
};
export const repostPost = (id, reposted) => {
    return {
        type: REPOST_POST,
        payload: {
            id,
            reposted,
        },
    };
};