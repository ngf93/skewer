import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

SwiperCore.use([Navigation, Pagination])

const About = () => {

    useEffect(() => {
        document.title = "О нас"
    }, [])

    return (
        <main className='pt-4 pt-lg-5'>
            <section className="sec-7 position-relative container mb-8">
                <div className='row row-cols-lg-1 mb-5'>
                    <div>
                        <h1 className="inner text-center text-md-start">ДОСТАВКА ШАУРМЫ И ШАШЛЫКА В КАЗАНИ</h1>
                        <p className='fs-11 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, amet feugiat ut nullam gravida pharetra ante. Elementum aliquet nibh donec amet mauris magna praesent imperdiet morbi. Odio in mi arcu imperdiet nisl eu. Felis, sem volutpat nibh sapien, felis dignissim. Velit suspendisse praesent scelerisque mi commodo vitae non ac. Quam a consectetur orci rhoncus in fermentum, dui posuere. Aenean varius sit quis ultrices sem neque, dictum mattis turpis. Risus, aliquet nisi, vulputate adipiscing euismod risus. Etiam amet consequat, mi, sagittis neque sit odio magnis. Duis metus arcu, quisque tellus lorem sed commodo.</p>
                        <p className='fs-11 mb-3'>Imperdiet imperdiet nunc vestibulum, nec. Dolor ut leo quis sed in malesuada amet cras. Egestas a nunc a purus. Dui, interdum ante enim id elit a. Eu nibh rhoncus, et dui ac. Morbi diam eu ultricies semper. Et tortor semper nunc porta vitae augue. Ultricies velit, aliquam libero elit quis. Aliquet est vehicula morbi dignissim.</p>
                    </div>
                    {/* <div>
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            className="swiper-about"
                        >
                            <SwiperSlide>
                                <img src="/images/hall1.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall2.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall3.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall4.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall5.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall6.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall7.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/hall8.jpg" alt="RefettoriO" className="img-fluid" />
                            </SwiperSlide>
                        </Swiper>
                    </div> */}
                </div>
                <div className='row flex-md-row-reverse mb-5'>
                    <div className='col-md-8'>
                        <h2>Меню</h2>
                        <p className='fs-11 mb-3'>Imperdiet imperdiet nunc vestibulum, nec. Dolor ut leo quis sed in malesuada amet cras. Egestas a nunc a purus. Dui, interdum ante enim id elit a. Eu nibh rhoncus, et dui ac. Morbi diam eu ultricies semper. Et tortor semper nunc porta vitae augue. Ultricies velit, aliquam libero elit quis. Aliquet est vehicula morbi dignissim.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/about1.jpg" alt="Меню" className="about-img" />
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-md-8'>
                        <h2>Повара</h2>
                        <p className='fs-11 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, amet feugiat ut nullam gravida pharetra ante. Elementum aliquet nibh donec amet mauris magna praesent imperdiet morbi. Odio in mi arcu imperdiet nisl eu. Felis, sem volutpat nibh sapien, felis dignissim. Velit suspendisse praesent scelerisque mi commodo vitae non ac. Quam a consectetur orci rhoncus in fermentum, dui posuere. Aenean varius sit quis ultrices sem neque, dictum mattis turpis. Risus, aliquet nisi, vulputate adipiscing euismod risus. Etiam amet consequat, mi, sagittis neque sit odio magnis. Duis metus arcu, quisque tellus lorem sed commodo.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/about2.jpg" alt="Повара" className="about-img" />
                    </div>
                </div>
                <div className='row flex-md-row-reverse mb-5'>
                    <div className='col-md-8'>
                        <h2>Доставка</h2>
                        <p className='fs-11 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, amet feugiat ut nullam gravida pharetra ante. Elementum aliquet nibh donec amet mauris magna praesent imperdiet morbi. Odio in mi arcu imperdiet nisl eu. Felis, sem volutpat nibh sapien, felis dignissim. Velit suspendisse praesent scelerisque mi commodo vitae non ac. Quam a consectetur orci rhoncus in fermentum, dui posuere. Aenean varius sit quis ultrices sem neque, dictum mattis turpis. Risus, aliquet nisi, vulputate adipiscing euismod risus. Etiam amet consequat, mi, sagittis neque sit odio magnis. Duis metus arcu, quisque tellus lorem sed commodo.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/about3.jpg" alt="Доставка" className="about-img" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h2>Опыт</h2>
                        <p className='fs-11 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, amet feugiat ut nullam gravida pharetra ante. Elementum aliquet nibh donec amet mauris magna praesent imperdiet morbi. Odio in mi arcu imperdiet nisl eu. Felis, sem volutpat nibh sapien, felis dignissim. Velit suspendisse praesent scelerisque mi commodo vitae non ac. Quam a consectetur orci rhoncus in fermentum, dui posuere. Aenean varius sit quis ultrices sem neque, dictum mattis turpis. Risus, aliquet nisi, vulputate adipiscing euismod risus. Etiam amet consequat, mi, sagittis neque sit odio magnis. Duis metus arcu, quisque tellus lorem sed commodo.</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/about4.jpg" alt="Опыт" className="about-img" />
                    </div>
                </div>
            </section>
        </main >
    );
};

export default About;
