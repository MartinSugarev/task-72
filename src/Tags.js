import React from 'react'

export const Tags = ({tags}) => {
    return (
             tags.map((t, index) => {
                  return <div key={index} className="tag">{'#' + t}</div>})
    )
}
