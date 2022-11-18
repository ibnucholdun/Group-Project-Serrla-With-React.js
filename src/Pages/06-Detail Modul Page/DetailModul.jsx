import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListAside from '../../Components/List Aside/ListAside'
import { getDetailModul } from '../../Redux/Actions/modulActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import './DetailModul.css'

const DetailModul = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {contents} = useSelector(state => state.modul.modul)
  
  useEffect(() => {
    dispatch(getDetailModul(id))
  }, [])

  return (
    <div>
      <Navbar nav1={'Home'} route1={'/home'} nav2={'Modul'} route2={'/modul'} nav4={'Logout'} route4={'/'}/>
      <section className="detail-modul">
            <div className="container-fluid">
                <div className="row">
                    <aside className="p-4 aside-daftar col-md-4">
                        <div className="container-daftar">
                            <h3 className="daftar">Daftar Materi</h3>
                            <ul className="list">
                              {
                                contents && contents.map((item, index) => {
                                  return <ListAside no={index+1} title={item.title} key={index}/>
                                })
                              }
                            </ul>
                        </div>
                    </aside>
                    <div className="col-md-8" id="response">

                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default DetailModul