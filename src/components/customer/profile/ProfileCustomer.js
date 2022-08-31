import React from 'react'
const ProfileCustomer = () => {
  return (
    <div className='d-flex justify-content-center p-4'>
      <div className="card w-50" >
        <div className="position-relative">
          <div className='card-img-top  w-100 bg-secondary' style={{ minHeight: 300 }}>

          </div>
          <img src="https://cdn1-production-images-kly.akamaized.net/Zt5HZG-17TBynRUc502XVqUP6Tc=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1700252/original/011840400_1504586214-tie_man_building.png.jpg" width={200} height={200} className="rounded-circle position-absolute top-50 start-50 translate-middle" />
        </div>

        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          {/* <a href="#" className="card-link">Card link</a> */}
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </div>
  )
}

export default ProfileCustomer