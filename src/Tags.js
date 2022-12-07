import React from 'react'

export const Tags = ({tags}) => {
    return (
        <div className="tags">
             {tags.map((t, index) => {
                  return <div key={index} className="tag">{'#' + t}</div>})}
      </div>
    )
}
