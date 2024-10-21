import React, { useContext } from 'react'
import Post from './Post'
import { FetchApp } from '../store/FetchAppContext'

function PostList() {

    let {postList} = useContext(FetchApp)
  return (
        <div className="app-posts">
            {postList.map((posts)=><Post key={posts.id} posts = {posts}/>)}
        </div>
  )
}

export default PostList