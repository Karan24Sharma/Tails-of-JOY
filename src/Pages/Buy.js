import React from 'react'
import buy1 from '../img/buy1.jpg'
import buy2 from '../img/buy2.jpg'
import buy3 from '../img/buy3.jpg'
import buy4 from '../img/buy4.jpg'
import adopt1 from '../img/adopt1.jpg';
import adopt2 from '../img/adopt2.jpg'; 

export const Buy = () => {
  return (
    <>
      <div className=" my-5 container buy-container">

      <div className="buy-more container">

        <div className="buy-content d-inline-flex flex-wrap">

          <div className="card">
            <img src={buy1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Rocky</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #101</li>
              <li className="list-group-item"> <b>Age</b> : 7 months</li>
              <li className="list-group-item"> <b>Breed</b> : Border Collie</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>

          <div className="card">
            <img src={buy2} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Bella</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #102</li>
              <li className="list-group-item"> <b>Age</b> : 11 months</li>
              <li className="list-group-item"> <b>Breed</b> : Polish rabbit</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>

          <div className="card">
            <img src={buy3} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Daisy</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #103</li>
              <li className="list-group-item"> <b>Age</b> : 2 months</li>
              <li className="list-group-item"> <b>Breed</b> : Bichon Frise</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>

          <div className="card">
            <img src={buy4} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Tommy</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #104</li>
              <li className="list-group-item"> <b>Age</b> : 5 months</li>
              <li className="list-group-item"> <b>Breed</b> : Husky</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>

          <div className="card">
            <img src={adopt1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Luna</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #105</li>
              <li className="list-group-item"> <b>Age</b> : 8 months</li>
              <li className="list-group-item"> <b>Breed</b> : Persian Cat</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>

          <div className="card">
            <img src={adopt2} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title buy-name">Coco</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
            <li className="list-group-item"> <b>Id</b> : #106</li>
              <li className="list-group-item"> <b>Age</b> : 1 year</li>
              <li className="list-group-item"> <b>Breed</b> : Aspin</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary buy-btn">Request Buy</button>
            </div>
          </div>
        </div>
        <hr />  
      </div> 

      <div className="sell-content-container text-center">
        <h1>Want to Sell ?</h1>

        <div className="signup-block">
                <div className="container form-control signup">
                <form>
                        <div className="form-group mb-3 ">
                            <input type="name" 
                            className="form-control" 
                            placeholder="Name" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Email" 
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="phone" 
                            className="form-control"  
                            placeholder="Mobile" 
                            />
                        </div>
                        <div className="form-group mb-3">
                          <textarea className="form-control"  
                          rows="2"
                          placeholder="Address"></textarea>
                        </div>
                        <div className="mb-3">
                          <input className="form-control" type="file" id="formFile"/>
                        </div>
                        <div className="form-group sign-up request-btn">
                            <button type="submit">Request Sell</button>
                        </div>
                    </form>
                </div>
        </div>

      </div>
      </div>
    </>
  )
}
