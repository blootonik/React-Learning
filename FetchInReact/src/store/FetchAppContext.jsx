import { createContext, useReducer, useState } from "react";

export const FetchApp = createContext();

const postListReducer= (currentPostList, action)=>{
    let newPostList = currentPostList
    if(action.type==="DEFAULT_POSTS"){
        newPostList = action.payload.posts;
    }else if(action.type === "ADD_POST"){
        newPostList = [action.payload,...currentPostList]

    }else if(action.type === "DELETE_POST"){
        newPostList = currentPostList.filter((post)=> post.id !== action.payload.postID)
    }
    return newPostList;

}
const FetchAppProvider = ({children}) => {

const [postList, dispatchPostList] = useReducer(postListReducer,
    []);

    const addPost = (userId,title,body,tags,views,likes,dislikes)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id: Date.now(),
                userId,
                title,
                body,
                tags,
                views,
                reactions: {
                    likes,
                    dislikes
                }
                
            }
        })


    }
    
    const deletePost = (postID)=>{

        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postID
            }
        })
    
    }
    
     const FetchPost= async ()=>{
         let res =  await fetch('https://dummyjson.com/posts')
        let data  = await res.json();
        dispatchPostList({
            type:"DEFAULT_POSTS",
            payload:{
                posts:data.posts,
            }
        })
    
    }



  let [tabName, setTabName] = useState("Home");

  const handleTabClick = (tab) => {
    setTabName(tab);
  };


  return (
    <FetchApp.Provider value={{ tabName, handleTabClick,addPost,deletePost, postList,FetchPost }}>
      {children}
    </FetchApp.Provider>
  );
};

export default FetchAppProvider;
