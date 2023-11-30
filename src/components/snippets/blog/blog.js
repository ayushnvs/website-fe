import React, { useState } from 'react'
import './blog.css'

const Blog = () => {

    const [blogInfo, setBlogInfo] = useState({
        title: 'Welcome ot my awesome blog',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ratione. Provident rem fugit amet quasi. Deleniti tenetur tempore qui quaerat dolore labore placeat, quibusdam quisquam ratione corporis incidunt dolorem cum, cumque veniam nemo maiores, accusamus ea. Ex quasi libero distinctio veniam molestias magnam dicta corporis neque sed, in, earum ipsam officia reiciendis quis aperiam quaerat officiis rerum magni maxime, inventore at. Neque cupiditate dolorem, molestiae et pariatur, nihil, mollitia error rem nesciunt provident iste nostrum placeat fugit quia eos eum harum alias sint quidem architecto quo eveniet modi? Dolore tenetur neque commodi quam excepturi explicabo quo, sequi vero odit mollitia vitae asperiores et id qui eum aliquid voluptatem pariatur doloribus dolor. Veniam, sapiente. Quo totam ut reiciendis earum doloremque explicabo, magni asperiores nihil odio eos consectetur architecto aliquam facere tenetur voluptatum facilis aperiam, aspernatur optio. Rerum dolore adipisci ad atque similique voluptates dignissimos aliquam quo fuga. Quis quam voluptas explicabo recusandae magnam minus, amet similique ut. Asperiores in placeat quisquam quos aliquam maiores deserunt nesciunt, voluptatum eligendi modi rerum exercitationem. Possimus voluptatum cum vitae eligendi asperiores iusto nostrum magnam velit quas ipsa, optio nihil harum error distinctio accusantium perspiciatis cupiditate et omnis quis non! Sapiente quae dolorem, cupiditate unde eaque explicabo. Quos at facere reiciendis quis maxime veritatis voluptatem consequatur deserunt. Sit tempora odio porro similique eveniet molestias ex provident deleniti, quasi repudiandae alias atque, eligendi iste minus dolore dolorum dolores ab iure? Doloribus fuga, sunt itaque nihil debitis perspiciatis voluptates numquam officiis aut magni neque asperiores amet, nesciunt impedit accusamus. Autem quisquam quod tempore eaque facere quia maxime recusandae iusto dicta nihil, laudantium blanditiis adipisci consequuntur quos pariatur illum necessitatibus consequatur, eveniet ratione dolore. Sunt, eos debitis optio temporibus libero quam aliquam dolorem amet voluptates molestiae nisi nostrum nihil animi. A suscipit quae ipsa cumque velit iusto molestias, optio provident magni quasi pariatur possimus harum asperiores dolorum. Architecto cum veritatis distinctio accusantium iste. Beatae suscipit dolorum optio rerum distinctio mollitia earum pariatur laborum modi porro, excepturi iure rem dolorem! Exercitationem quos accusantium, officiis nostrum quis inventore alias ipsa qui iusto? Doloremque eius molestiae dolor unde magnam. Iusto illo nostrum enim inventore impedit quibusdam quaerat hic mollitia molestias voluptatibus non est, dolore reprehenderit pariatur deserunt numquam, optio exercitationem dolorem libero atque quisquam provident! Dolore cumque deserunt autem, facere quas impedit! Aspernatur rerum itaque, enim laudantium totam delectus officia inventore quis in aperiam, voluptatum repudiandae exercitationem sed consectetur, reiciendis rem ipsum qui neque quam tempora sequi doloribus suscipit saepe nemo? Reprehenderit nostrum consequatur nobis debitis necessitatibus vitae, suscipit maiores obcaecati. Quos repudiandae earum, atque iste autem molestiae ab. Praesentium dolorem ea molestiae veniam odio quod deserunt magnam, eos facilis illum possimus, molestias sapiente eaque non quisquam quasi. Amet quos suscipit ut iste molestiae non alias repellendus deserunt harum? Dolor cumque dolorum, veniam provident fuga reiciendis nostrum. Eligendi ducimus maxime consectetur dicta, aut modi culpa corrupti! Nemo rem doloribus animi, repudiandae asperiores et at totam nisi natus fugit earum nam accusamus voluptas maiores labore tempore distinctio ad esse. Eum labore nulla doloremque.',
        authorName: 'Ayush Mishra',
        publishedOn: '26 Nov',
        modifiledOn: '28 Nov'
    })

    return (
        <div className='blog container m-t-8 p-4'>
            <div className="blog-header m-b-4">
                <h2 className='fw-bold'>{blogInfo.title}</h2>
            </div>
            <div className="author-info">
                <p className="author-name d-inline me-2">By {blogInfo.authorName}</p>
                <p className="publishedon d-inline me-2">Published on {blogInfo.publishedOn}</p>
                <p className="modifiedon d-inline">Modified on {blogInfo.modifiledOn}</p>
            </div>
            <div className="blog-content">
                <p className="content">{blogInfo.content}</p>
            </div>
        </div>
    )
}

export default Blog