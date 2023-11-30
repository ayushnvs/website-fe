import React from 'react'
import ProfileSnip from '../snippets/profile/profile'
import Blog from '../snippets/blog/blog'
import Quote from '../snippets/quote/quote'

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-9">
        <Quote />
        <Blog />
      </div>
      <div className="col-md-3 mt-4">
        <ProfileSnip />
      </div>
    </div>
  )
}

export default Home