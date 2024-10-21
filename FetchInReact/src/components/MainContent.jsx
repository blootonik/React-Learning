import React, { useContext } from 'react'
import PostList from './PostList'
import CreatePost from './CreatePost'
import { FetchApp } from '../store/FetchAppContext'

function MainContent() {
    let {tabName} = useContext(FetchApp)
  return (
    <>
    {tabName==="Home"?<PostList/>:<CreatePost/>}
    </>
  )
}

export default MainContent