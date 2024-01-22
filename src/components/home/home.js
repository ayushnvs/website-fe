import React from 'react'
import ProfileSnip from '../snippets/profile/profile'
import Blog from '../snippets/blog/blog'
import Quote from '../snippets/quote/quote'
import Comment from '../snippets/comment/comment'
import  useAuth from '../../hooks/AuthProvider'

const Home = () => {
  const {auth, setAuth } = useAuth()
  
  return (
    <div className="px-4 py-4">
      {console.log("auth: ", auth)}
      <div className="row">
        <div className="extras col-md-1"></div>
        <div className="col-md-8">
          <Blog />
          <Comment />
        </div>
        <div className="col-md-3">
          <Quote />
          <ProfileSnip />
        </div>
      </div>
    </div>
  )
}

export default Home