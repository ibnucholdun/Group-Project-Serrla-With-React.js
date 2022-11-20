import React from 'react'
import vectorOval from 'Assets/images/vector-oval.png'
import vectorOval2 from 'Assets/images/vector-oval-2.png'
import iconSerrla from 'Assets/images/icon-serrla.png'
import ibnuPic from 'Assets/images/ibnu.png'
import rafidPic from 'Assets/images/rafid.png'

import module from './About.module.css';

export default function About() {
    return (
        <main>
            <section className={module['section-1']}>
                <div className="container">
                    <div className="row g-4 p-5">
                        <div className="col-md-8">
                            <h4 className="fw-normal">Tentang Serrla</h4>
                            <h2 className="fw-semibold my-3">Apa Sih Serrla Itu?</h2>
                            <p>Serrla (Serrum Learning Art) adalah aplikasi yang bergerak di bidang pendidikan seni dan budaya. Serrla membantu anak muda dalam mengenal dan mempelajari seni melalui materi dan video pembelajaran yang menarik dan interaktif oleh pemateri.</p>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src={iconSerrla} alt="Logo Serrla" className="img-fluid" width="120px" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={module['section-2']}>
                <div className="row mx-auto">
                    <div className={`col-md-6 p-5 ${module['left']}`}>
                        <img src={vectorOval} alt="vector-oval" className="vector1" width="100px" height="50px" />
                        <h2 className="text-center mb-5 bg-transparent">Background Story</h2>
                        <p className="fw-light">Kurangnya paparan seni dan budaya di sekolah dan belum adanya platform
                            untuk memfasilitasi anak muda mempelajari seni dan budaya berbasis proyek
                            , anak muda menjadi sulit untuk mencari pengetahuan dan pembelajaran tentang
                            seni budaya dan mengembangkan ketertarikan, minat, bakat, dan potensinya dalam bidang seni dan budaya.</p>
                    </div>
                    <div className={`col-md-6 ${module.right} p-5 `}>
                        <img src={vectorOval2} alt="" className="vector2" width="100px" height="50px" />
                        <h2 className="text-center mb-5 bg-transparent">Our Goal</h2>
                        <p className="fw-light">Sebuah platform digital untuk anak muda agar bisa mendapatkan informasi dan pengetahuan yang cukup tentang seni dan budaya agar bisa mengembangkan ketertarikan, minat, dan bakatnya masing-masing</p>
                    </div>
                </div>
            </section>

            <section className={module['section-3']}>
                <div className="container py-5">
                    <h2 className="text-center">Meet the Team</h2>
                    <hr className="w-25 m-0 mb-5 mx-auto" />
                    <h4 className="text-center mb-4">Front-end Developers</h4>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <figure>
                                <img src={ibnuPic} alt="ibnu" width="150px" />
                                <figcaption className="text-center">Ibnu Choldun</figcaption>
                            </figure>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <figure>
                                <img src={rafidPic} alt="rafid" width="150px" />
                                <figcaption className="text-center">Rafid Ammar</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}