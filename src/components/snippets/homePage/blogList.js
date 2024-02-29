import React, { useState, useEffect } from 'react';

function BlogList() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Flash SMS messages. Things you need to know"
        },{
            id: 2,
            title: "Key differences between Windows 10 and 11"
        },{
            id: 3,
            title: "Road safety in this technical modern age"
        }
    ]);

    useEffect(() => {
        // Fetch blog data here
        fetch('your-api-endpoint')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error(error));

        // Replace 'your-api-endpoint' with the actual URL of your API endpoint that returns the blog data.
    }, []);

    return (
        <div className="blog-list">
            <h2>Available Blogs</h2>
            {blogs.length > 0 ? (
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <a href={`/blog/${blog.id}`}>{blog.title}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blogs available yet.</p>
            )}
        </div>
    );
}

export default BlogList;
