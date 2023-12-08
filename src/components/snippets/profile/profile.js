import './profile.css'
import useAuth from '../../../hooks/AuthProvider'

const ProfileSnip = () => {
    const { auth } = useAuth()

    return (
        <div className="profile-snip">
            <div className="card user-card">
                <div className="card-header">
                    <h5>Profile</h5>
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img
                            src={
                                auth.profileImg
                                ? auth.profileImg
                                : "https://bootdey.com/img/Content/avatar/avatar7.png"
                            }
                            className="img-radius"
                            alt="User-Profile"
                        />
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                    <p className="text-muted">Active | Male | Born 23.05.1992</p>
                    <hr />
                    <p className="text-muted m-t-15">Activity Level: 87%</p>
                    <ul className="list-unstyled activity-leval">
                        <li className="active" />
                        <li className="active" />
                        <li className="active" />
                        <li />
                        <li />
                    </ul>
                    <div className="bg-c-blue counter-block m-t-10 p-20">
                        <div className="row">
                            <div className="col-4">
                                <i className="fa fa-comment" />
                                <p>1256</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-user" />
                                <p>8562</p>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-suitcase" />
                                <p>189</p>
                            </div>
                        </div>
                    </div>
                    <p className="m-t-15 text-muted">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                    <hr />
                    <div className="row justify-content-center user-social-link">
                        <div className="col-auto">
                            <a href="#!">
                                <i className="fa fa-facebook text-facebook" />
                            </a>
                        </div>
                        <div className="col-auto">
                            <a href="#!">
                                <i className="fa fa-twitter text-twitter" />
                            </a>
                        </div>
                        <div className="col-auto">
                            <a href="#!">
                                <i className="fa fa-dribbble text-dribbble" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileSnip

