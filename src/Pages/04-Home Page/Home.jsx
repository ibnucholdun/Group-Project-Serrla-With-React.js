import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Gambar1 from '../../Assets/images/gambar5.png'
import Gambar2 from '../../Assets/images/gambar6.jpg'
import Gambar3 from '../../Assets/images/gambar7.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar nav1={'Home'} route1={'/home'} nav2={'Modul'} route2={'/modul'} nav4={'Logout'} route4={'/'}/>
      <main>
        <section className=" carousel-section m-5">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Gambar1} className="d-block mx-auto rounded-5" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={Gambar2} className="d-block mx-auto rounded-5" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={Gambar3} className="d-block mx-auto rounded-5" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home