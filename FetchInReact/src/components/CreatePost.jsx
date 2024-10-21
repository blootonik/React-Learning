
import React, { useContext, useRef } from 'react'
import { FetchApp } from '../store/FetchAppContext'

function CreatePost() {

  let {addPost} = useContext(FetchApp)

   let userIdEL = useRef()
   let titleEL = useRef()
   let bodyEL = useRef();
   let tagsEL = useRef();
   let viewsEL = useRef();
   let likesEL = useRef();
   let dislikesEL = useRef();


    const handleSubmit = (e)=>{
      e.preventDefault();
      let userId = userIdEL.current.value;
      let title = titleEL.current.value;
      let body = bodyEL.current.value;
      let tags = tagsEL.current.value.split(" ");
      let views = viewsEL.current.value;
      let likes = likesEL.current.value;
      let dislikes = dislikesEL.current.value;
      
      console.log(tags)

      addPost(userId,title,body,tags,views,likes,dislikes)
    }



  return (
<form className='create-Post' onSubmit={handleSubmit}>
<div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User ID</label>
    <input ref={userIdEL} type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder='Enter Your User Id Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Post Title</label>
    <input ref={titleEL} type="text" className="form-control" id="postTitle" aria-describedby="emailHelp" placeholder='Enter Your Post Title Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Post Content</label>
    <textarea ref={bodyEL} type="text" className="form-control" id="postContent" aria-describedby="emailHelp" placeholder='Enter Your Content Here...' rows={5}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Tags</label>
    <input ref={tagsEL}type="text" className="form-control" id="postTags" aria-describedby="emailHelp" placeholder='Enter Your tags Here using spaces...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Views Count</label>
    <input ref={viewsEL} type="number" className="form-control" id="postReaction" aria-describedby="emailHelp" placeholder='Enter Your Post Reaction Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Like Count</label>
    <input ref={likesEL} type="number" className="form-control" id="postReaction" aria-describedby="emailHelp" placeholder='Enter Your Post Reaction Here...'/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Dislikes Count</label>
    <input ref={dislikesEL} type="number" className="form-control" id="postReaction" aria-describedby="emailHelp" placeholder='Enter Your Post Reaction Here...'/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  )
}

export default CreatePost