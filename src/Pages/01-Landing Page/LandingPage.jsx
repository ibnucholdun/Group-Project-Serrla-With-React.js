import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Gambar1 from '../../Assets/images/gambar1.png'
import Gambar2 from '../../Assets/images/gambar2.png'
import VectorOval from '../../Assets/images/vector-oval.png'
import Vector1 from '../../Assets/images/vector2.png'
import vector2 from '../../Assets/images/vector3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useDispatch, useSelector } from 'react-redux'
import { getModul } from '../../Redux/Actions/modulActions'
import { getInstructur } from '../../Redux/Actions/instructurActions'
import CardModul from '../../Components/Card Modul/CardModul'
import CardInstructur from '../../Components/Card Instructur/CardInstructur'
import 'swiper/css/navigation';
import 'swiper/css';
import './LandingPage.css'

const LandingPage = () => {
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
      <Navbar nav1={'About'} route1={'/about'} nav2={'Contact Us'} route2={'/contact'} nav3={'Sign In'} route3={'/sign-in'} nav4={'Sign Up'} route4={'/sign-up'} route5={'/'}/>
      <main>
        <section className="hero-section d-flex align-items-center">
          <img src={VectorOval} alt="" className="vector1"/>
          <img src={VectorOval} alt="" className="vector2"/>
          <div className="container ">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 hero-section-text">
                <h1 className="hero-text pw-bold h1">Tingkatkan potensi kesenianmu!</h1>
                <p className="pw-light">Gali minat dan bakatmu bersama Serrla dengan pemateri yang handal di bidangnya</p>
                <button className="btn btn-hero">Mulai Sekarang</button>
              </div>
              <div className="col-md-6 hero-section-img">
                <img src={Gambar1} alt="hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-section d-flex align-items-center">
            <img src={VectorOval} alt="" className="vector3" />
            <img src={Vector1} alt="" className="vector4" />
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={Gambar2} alt="Hero" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="about-text pw-semibold h1 text-center pt-2">Apa Sih Serrla Itu?</h1>
                        <p className="pw-light">Serrla (Serrum Learning Art) adalah aplikasi yang bergerak di bidang pendidikan seni dan budaya. Serrla membantu siswa dalam mengenal dan mempelajari seni melalui materi dan video pembelajaran interaktif oleh pemateri.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="list-class-section">
            <img src={vector2} alt="" className="vector5"/>
            <img src={vector2} alt="" className="vector6"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="list-class-text pw-semibold h2">Gabung Bersama Kami</h2>
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
                                <CardModul title={item.title} image={item.image} descript={item.descript} category={item.category} id={item.id}/>
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

export default LandingPage