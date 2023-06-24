import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import data from '../assets/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Work = () => {

  return (
      <div id='work' >
          <h2>WORK</h2>
          <section>
              <article>
                  <Carousel
                      showStatus={false}
                      autoPlay={true}
                      infiniteLoop={true}
                      interval={2000}
                      showThumbs={false}
                  >
                      {
                          data.map((i) => (
                              <div className='workItem' key={i.name} >
                                  <img src={i.img} alt="" />
                                  <aside>
                                      <a target={'_blank'} href={i.link}>View Demo</a>
                                      <h3>{i.name}</h3>
                                      <p> {i.desc} </p>
                                </aside>
                              </div>
                          ))
                      }
                  </Carousel>
              </article>
          </section>
    </div>
  )
}

export default Work;