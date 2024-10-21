import React, { useContext } from 'react'
import { FetchApp } from '../store/FetchAppContext';

function Post({posts}) {
  let {deletePost} = useContext(FetchApp);

  return (
<div className="card app-Post" style={{height:"450px"}}>
  <div className="card-body ">
    <h6>{`${posts.userId}`}</h6>
    <h5 className="card-title">{posts.title}</h5>
    <p className="card-text">{posts.body}</p>
  </div>
    <div className="tags-box">
    {posts.tags.map((tag)=><button className="btn btn-dark">{tag}</button>)}
    </div>
  <div className="alert alert-success appLerts " role="alert">
  <button type="button" className="btn btn-outline-info">{`Views: ${posts.views}`}</button>
  <button type="button" className="btn btn-success">{`Likes: ${posts.reactions.likes}`}</button>
  <button type="button" className="btn btn-danger">{`Dislikes: ${posts.reactions.dislikes}`}</button>
  <button type="button" className="btn btn-dark" onClick={()=>deletePost(posts.id)}>Delete Post</button>
</div>
</div>
  )
}

export default Post