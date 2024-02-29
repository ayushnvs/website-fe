import './blogCard.css'
import img from './../../../assets/img/Conch2.jpg'

const BlogCard = () => {
    return (
        <>
            <div className="container-2">
                <div className="one" />
                <div className="two">
                    <img className='blogcard-img'
                        src={img}
                        alt="image"
                        height="300px"
                        width="630px"
                    />
                    <div className="text-part">
                        <div className="red">
                            <div className="green">
                                <div className="red">
                                    <a href="green">
                                        <img className='blogcard-img' src="" alt="" />
                                    </a>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="" />
                </div>
                <div className="three" />
            </div>
        </>
    )
}

export default BlogCard