import React from 'react'

const Quote = () => {
    return (
        <figure className="text-center">
            <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
    )
}

export default Quote