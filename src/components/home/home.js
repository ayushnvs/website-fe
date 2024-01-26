import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <div>
        Hey Mithi, this is going to be our home page
      </div>
      <div className="link">
        <Link className="navbar-brand fw-bold fs-3 ms-2" to="/detail">
          Blogs Detail Page
        </Link>
      </div>

    </>
  )
}

export default Home