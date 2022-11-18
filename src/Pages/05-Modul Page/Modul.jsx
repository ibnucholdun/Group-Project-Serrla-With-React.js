import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardModul from '../../Components/Card Modul/CardModul'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { getModul, getSearchedModul, getFilteredModul } from '../../Redux/Actions/modulActions'
import InputCheckbox from '../../Components/InputCheckbox/InputCheckbox'
import './Modul.css'

const Modul = () => {
  const dispatch = useDispatch()
  const {modul, isLoading} = useSelector(state => state.modul)

  useEffect(() => {
    dispatch(getModul())
  }, [])

  const handleSearch = (e) => {
    dispatch(getSearchedModul(e.target.value))
  }

  return (
    <div>
      <Navbar nav1={'Home'} route1={'/home'} nav2={'Modul'} route2={'/modul'} nav4={'Logout'} route4={'/'}/>
      <main>
        <section className="search-section">
          <h1 className="text-center fw-semibold">Modul Yang Tersedia</h1>
          <p className="text-center">Gali pengetahuan seni dengan mengikuti modul yang tersedia sesuai dengan minat dan bakatmu!</p>
          <input type="text" className="form-control input-search w-50 d-block mx-auto" placeholder="Cari Modul" aria-label="Cari Modul" aria-describedby="button-addon2" name="search" onChange={handleSearch}/>
        </section>
        <section className="m-5">
            <div className="container">
                <div className="row gx-5 mx-1">
                    <aside className="col-lg-3 filter-side">
                        <div className="filter">
                            <h3 className="fw-semibold">Filter Modul</h3>
                            <form>
                              <div className="filter-item">
                                  <h5 className="fw-normal">Kategori</h5>
                                  <InputCheckbox name={'Seni Rupa'} value={'Seni Rupa'} id={'Seni Rupa'} htmlFor={'Seni Rupa'} />
                                  <InputCheckbox name={'Seni Musik'} value={'Seni Musik'} id={'Seni Musik'} htmlFor={'Seni Musik'}/>
                                  <InputCheckbox name={'Seni Tari'} value={'Seni Tari'} id={'Seni Tari'} htmlFor={'Seni Tari'}/>
                                  <InputCheckbox name={'Seni Teater'} value={'Seni Teater'} id={'Seni Teater'} htmlFor={'Seni Teater'}/>
                              </div>
                              <button className="btn btn-filter mt-3">Filter</button>
                            </form>
                        </div>
                    </aside>
                    <section className="col-lg-9 list-class-container mt-3">
                        <div className="row list-modul g-3">
                          {
                            
                            isLoading ? <span>Loading........</span> :
                            modul.length > 0 ? modul.map((item) => {
                              return (
                                <div key={item.id} className="col">
                                  <CardModul title={item.title} image={item.image} descript={item.descript} category={item.category} id={item.id} style={{width: '15rem', fontWeight: '400'}}/>
                                </div>
                              )
                            }) : <p className="text-center fs-4">Modul Tidak Ditemukan</p>
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