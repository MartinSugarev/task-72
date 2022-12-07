import React from 'react'

export const Tags = (props) => {
    return (
        <div className="tags">
            {props.tags.map((t, index) => {
                 return <div key={index} className="tag">{'#' + t}</div>})}
        </div>
    )
}
