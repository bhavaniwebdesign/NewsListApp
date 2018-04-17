import React from 'react';
import Timestamp from 'react-timestamp';
import img from '../../img/no-image.png';

const Newssingle = ({item,imageURL})=>(
  <section className="card mb-3" >
       {(item.hasOwnProperty('thumbnailImage'))?
              <img src={item.thumbnailImage.id.link} alt={item.title} className="card-img-top img-fluid" />
            :  <img src={img} alt={item.title} className="card-img-top img-fluid" />
          }

      <div className="card-block">
        <h4 className="card-title pt-2">{item.title}</h4>
        <blockquote className="card-text">{item.description}</blockquote>
      </div>

      <div className="card-footer text-right">
            <span className="font-italic">  Published:  <Timestamp time={item.dateLive} format='full' /></span>

          </div>
  </section>

)

export default Newssingle;
