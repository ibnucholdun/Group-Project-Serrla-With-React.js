import React from 'react'

const ListAside = ({no, title, isActive}) => {
  return (
    <>
        <li className={`list-span ${isActive ? "active" : ""}`} data-list={no}>{no ? no+".": ""} {title}</li>
    </>
  )
}

export default ListAside