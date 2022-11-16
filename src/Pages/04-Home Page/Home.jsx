import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Gambar1 from '../../Assets/images/gambar5.png'
import Gambar2 from '../../Assets/images/gambar6.jpg'
import Gambar3 from '../../Assets/images/gambar7.jpg'
import Vector1 from '../../Assets/images/vector3.png'
import Vector2 from '../../Assets/images/vector4.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useDispatch, useSelector } from 'react-redux'
import { getModul } from '../../Redux/Actions/modulActions'
import CardModul from '../../Components/Card Modul/CardModul'
import { getInstructur } from '../../Redux/Actions/instructurActions'
import CardInstructur from '../../Components/Card Instructur/CardInstructur'
import 'swiper/css/navigation';
import 'swiper/css';
import './Home.css'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const dispatch = useDispatch()
  const {modul, isLoading} = useSelector(state => state.modul)
  const {instructur} = useSelector(state => state.instructur)

  useEffect(() => {
    dispatch(getModul())
    dispatch(getInstructur())
  }, [])

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

        <section className="list-class-section mx-4">
          <div className="container">
            <img src={Vector1} alt="" className="vector1"/>
            <img src={Vector2} alt="" className="vector7"/>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                  <h2 className="list-class-text pw-semibold h2">Modul Tersedia</h2>
                  <Link to="/modul" className="list-class-text pw-semibold" style={{color: "#005386"}}>Selengkapnya</Link>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="swiper">
                <Swiper
                  breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                      },
                      769: {
                        slidesPerView: 3,
                        spaceBetween: 40
                      }
                    }}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {
                    isLoading ? <span>Loading........</span> :
                    modul.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <CardModul title={item.title} image={item.image} descript={item.descript} category={item.category} id={item.id} style={{width: "18rem"}}/>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="instructur-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="instructur-text pw-semibold h2 text-center">Pemateri</h2>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="swiper">
                    <Swiper
                        breakpoints={{
                            320: {
                              slidesPerView: 1,
                            },
                            480: {
                              slidesPerView: 2,
                              spaceBetween: 30
                            },
                            769: {
                              slidesPerView: 3,
                              spaceBetween: 40
                            }
                        }}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                      >
                      {
                        isLoading ? <span>Loading........</span> :
                        instructur.map((item) => {
                          return (
                            <SwiperSlide key={item.id}>
                              <CardInstructur name={item.name} image={item.image} descript={item.descript}/>
                            </SwiperSlide>
                          )
                        })
                      }
                      </Swiper>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home