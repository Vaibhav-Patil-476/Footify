import React from 'react'

function Home() {
    return (
        <>

            <div className='content text-center text-light' style={{ background: "rgb(0, 0, 0)" }}>
                <h3>25% off (Almost) Everything! Use Code: Summer Sale</h3>

                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="https://coolfootwear.netlify.app/images/img_bg_2.jpg" class="d-block w-100" alt="..." style={{ height: "800px" }} />
                            <div class="carousel-caption d-none d-md-block text-dark">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="https://coolfootwear.netlify.app/images/img_bg_3.jpg" class="d-block w-100" alt="..." style={{ height: "800px" }} />
                            <div class="carousel-caption d-none d-md-block text-dark">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://coolfootwear.netlify.app/images/img_bg_1.jpg" class="d-block w-100" alt="..." style={{ height: "800px" }} />
                            <div class="carousel-caption d-none d-md-block text-dark">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div></div>

            <div className='container text-center pt-5'>
                <h1>It started with a simple idea: Create quality, well-designed products that I wanted myself. </h1>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-6 pt-5' >
                        <img src='https://coolfootwear.netlify.app/images/img_bg_3.jpg' style={{ width: "100%" }}></img>
                        <h1 className='text-center pt-5'>Shop Men's Collection</h1>
                    </div>
                    <div className='col-6 pt-5'>

                        <img src='https://coolfootwear.netlify.app/images/item-10.jpg' style={{ width: "100%",  height:"425px" }}></img>
                        <h1 className='text-center pt-5'>Shop Woman's Collection</h1>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home