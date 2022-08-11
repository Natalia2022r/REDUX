import { ADD_POST, COMMENT_POST, LIKE_POST, REPOST_POST} from "./type";
import {formatRelative, subDays} from "date-fns"
const initialState = {
    users: {
        AnakinSkywalker: {
            id: "1",
            userName: "Anakin Skywalker",
            postDate:formatRelative(subDays(new Date(), 0), new Date()),
            userNickname: "@dart_vader",
        },
        RaySkywalker: {
            id :"2",
            userName: "Ray Skywalker",
            postDate:formatRelative(subDays(new Date(), 0), new Date()),
            userNickName: "@ray",
        },
    },
    posts: [
        {
            id: 1,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate:formatRelative(subDays(new Date(), 0), new Date()),
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 100),
           
        },
        {
            id: 2,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate: formatRelative(subDays(new Date(), 1), new Date()),
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 100),
        },
        {
            id: 3,
            userIcon: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg",
            userName: "Anakin Skywalker",
            userNickName: "@dart_vader",
            postDate: formatRelative(subDays(new Date(), 2), new Date()),
            postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            userImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 100),
        },
    ],
};
const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_POST: {
            return { ...state, posts: [action.post, ...state.posts] };
        }
 
        case LIKE_POST: {
            const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
            payload.liked ? (state.posts[foundPostIndex].likes -= 1) : (state.posts[foundPostIndex].likes += 1);
            return state;
        }
        case COMMENT_POST: {
            const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
            payload.commented ? (state.posts[foundPostIndex].comments -= 1) : (state.posts[foundPostIndex].comments += 1);
            return state;
        }
        case REPOST_POST: {
            const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
            payload.reposted ? (state.posts[foundPostIndex].reposts -= 1) : (state.posts[foundPostIndex].reposts += 1);
            return state;
        }
        default: {
            return state;
        }
    }
};

export const postSelector = (state) => state.postsReducer.posts;
export const userSelector = (state) => state.postsReducer.users;

export default postsReducer;