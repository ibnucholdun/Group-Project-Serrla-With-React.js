import React from 'react'
import './CardInstructur.css'

const CardInstructur = ({name, descript, image}) => {
  return (
    <>
        <div className="swiper-slide">
            <div className="card" style={{width: "20rem", height: "350px"}}>
                <img src={image} className="card-img-top img-instructur pt-3 mx-auto d-block rounded-circle" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-description pw-normal">{descript}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardInstructur