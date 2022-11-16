import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardModul from '../../Components/Card Modul/CardModul'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { getModul } from '../../Redux/Actions/modulActions'
import './Modul.css'

const Modul = () => {
  const dispatch = useDispatch()
  const {modul, isLoading} = useSelector(state => state.modul)

  useEffect(() => {
    dispatch(getModul())
  }, [])
  return (
    <div>
      <Navbar nav1={'Home'} route1={'/home'} nav2={'Modul'} route2={'/modul'} nav4={'Logout'} route4={'/'}/>
      <main>
        <section className="search-section">
          <h1 className="text-center fw-semibold">Modul Yang Tersedia</h1>
          <p className="text-center">Gali pengetahuan seni dengan mengikuti modul yang tersedia sesuai dengan minat dan bakatmu!</p>
          <input type="text" className="form-control input-search w-50 d-block mx-auto" placeholder="Cari Modul" aria-label="CAri Modul" aria-describedby="button-addon2" name="search"/>
        </section>
        <section className="m-5">
            <div className="container">
                <div className="row gx-5 mx-1">
                    <aside className="col-lg-3 filter-side">
                        <div className="filter">
                            <h3 className="fw-semibold">Filter Modul</h3>
                            <div className="filter-item">
                                <h5 className="fw-normal">Kategori</h5>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Seni Rupa" id="seni-rupa"/>
                                    <label className="form-check-label" htmlFor="seni-rupa"> Seni Rupa </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Seni Musik" id="seni-musik"/>
                                    <label className="form-check-label" htmlFor="seni-musik"> Seni Musik </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Seni Tari" id="seni-tari"/>
                                    <label className="form-check-label" htmlFor="seni-tari"> Seni Tari </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Seni Teater" id="seni-teater"/>
                                    <label className="form-check-label" htmlFor="seni-teater"> Seni Teater </label>
                                </div>
                            </div>
                            <button className="btn btn-filter mt-3">Filter</button>
                        </div>
                    </aside>
                    <section className="col-lg-9 list-class-container mt-3">
                        <div className="row list-modul g-3">
                          {
                            isLoading ? <span>Loading........</span> :
                            modul.map((item) => {
                              return (
                                <div key={item.id} className="col">
                                  <CardModul title={item.title} image={item.image} descript={item.descript} category={item.category} id={item.id} style={{width: '15rem', fontWeight: '400'}}/>
                                </div>
                              )
                            })
                          }
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default Modul