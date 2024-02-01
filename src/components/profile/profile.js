import { useState } from 'react'
import useAuth from '../../hooks/AuthProvider'
import './profile.css'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useEffect } from 'react'

const Profile = () => {
  const { auth, setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const updateVariables = []

  useEffect(() => {
    try {
      console.log("Auth: ", auth)
      const getProfileData = async () => {
        const res = await axiosPrivate.post('/profile', { username: auth.username })
        setAuth({
          ...auth,
          ...res.data
        })
      }
      getProfileData()
    } catch (err) { console.log(err) }
  }, updateVariables)

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = async () => {
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + ' kB',
        base64: reader.result,
        file: file,
      }
      try {
        const res = await axiosPrivate.post(`/profile/update/${auth.username}`, { profileImg: fileInfo.base64 })
        if (res.statusText === 'OK') {
          setAuth({
            ...auth,
            profileImg: fileInfo.base64
          })
        }
      } catch (err) { console.log(err) }
    }
  }


  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">

                <section>
                  <label htmlFor="file-upload">
                    <img
                      src={
                        auth.profileImg
                          ? auth.profileImg
                          : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      }
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                  </label>
                  <input
                    type="file"
                    label="Image"
                    name="profileImg"
                    id="file-upload"
                    accept='.jpeg, .png, .jpg'
                    onChange={handleFileChange}
                  />
                </section>

                <h5 className="my-3">{auth.name}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Madhapur, Telangana, India</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Follow
                  </button>
                  <button type="button" className="btn btn-outline-primary ms-1">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning" />
                    <p className="mb-0">Add your website</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <p className="mb-0">Add your github account</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <p className="mb-0">Add your twitter account</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <p className="mb-0">Add your instagram account</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-facebook-f fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <p className="mb-0">Add your facebook account</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <ProfileFields fieldName={"Full Name"} name={"name"}/>
                <hr />
                <ProfileFields fieldName={"Email"} name={"email"}/>
                <hr />
                <ProfileFields fieldName={"Phone"} name={"phone"}/>
                <hr />
                <ProfileFields fieldName={"Address"} name={"address"} />
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{auth.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(857) 786-7848</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Madhapur, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Backend API
                    </p>
                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                      Backend API
                    </p>
                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

const ProfileFields = (props) => {
  const { auth, setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [editingFields, setEditingField] = useState(false)

  console.log("Data", auth[props.name])
  const [newData, setNewData] = useState({[props.name]: auth[props.name]})

  const handleChange = e => {
    const { name, value } = e.target
    setNewData({
      [name]: value
    })
  }

  const clickEdit = (e) => {
    setEditingField(true)
  }

  const clickUpdate = async (e) => {
    setEditingField(false)
    if (newData[props.name] !== auth[props.name]) {
      const res = await axiosPrivate.post('/profile/update', {username: props.username, ...newData})
      console.log(res)
      if (res.status == 200) {
        setAuth({
          ...auth,
          ...newData
        })
      }
    }
  }

  return (
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">{props.fieldName}</p>
      </div>
      <div className="col-sm-8">
        {
          editingFields
            ?
            <>
              <div>
                <input className="form-control form-control-sm" name={props.name} id={props.name} type="text" onChange={handleChange} value={newData[props.name]} />
              </div>
            </>
            :
            <p className="text-muted mb-0">{auth[props.name]}</p>
        }
      </div>
      <div className="col-sm-1">
        {
          editingFields
            ?
            <>
              <button className='update-profile-data' onClick={clickUpdate}>
                <i className="fa-solid fa-square-check"></i>
              </button>
            </>
            :
            <>
              <button className='update-profile-data' onClick={clickEdit}>
                <i className="fas fa-pencil-alt fa-lg" />
              </button>
            </>
        }
      </div>
    </div>
  );
}

export default Profile