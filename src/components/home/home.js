import React from 'react'
import ProfileSnip from '../snippets/profile/profile'
import Blog from '../snippets/blog/blog'
import Quote from '../snippets/quote/quote'

const Home = () => {
  return (
    <div className="container py-4">
      <div className="row">
      <div className="col-md-9">
        <Blog />
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