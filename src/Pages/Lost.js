import React from 'react'
import Lost1 from '../img/Lost1.jpg'
import Lost2 from '../img/Lost2.jpg'
import Lost3 from '../img/Lost3.jpg'
import Lost4 from '../img/Lost4.jpg'

export const Lost = () => {
  return (
    <>
      <div className=" my-3 container buy-container">

        <div className="buy-more container">

          <div className="buy-content d-inline-flex">

            <div className="card">
              <img src={Lost1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title buy-name">Rocky</h5>
              </div>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item"> <b>Pet Type</b> : Dog</li>
                <li className="list-group-item"> <b>Color</b> : White</li>
                <li className="list-group-item"> <b>Breed</b> : German Shephard</li>
                <li className="list-group-item"> <b>Owner Name</b> : Surender Jha</li>
                <li className="list-group-item"> <b>Email</b> : Surender@gmail.com</li>
                <li className="list-group-item"> <b>Contact</b> : 9832923721</li>
                <li className="list-group-item"> <b>City</b> : Delhi</li>
                <li className="list-group-item"> <b>Last Place Seen</b> : Kamla Nagar</li>
              </ul>
              <div className="card-body text-center">
                <button className="btn btn-primary buy-btn">Contact</button>
              </div>
            </div>

            <div className="card">
              <img src={Lost2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title buy-name">Milo</h5>
              </div>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item"> <b>Pet Type</b> : Cat</li>
                <li className="list-group-item"> <b>Color</b> : Golden</li>
                <li className="list-group-item"> <b>Breed</b> : Persion</li>
                <li className="list-group-item"> <b>Owner Name</b> : Ridhima Pandit</li>
                <li className="list-group-item"> <b>Email</b> : ridhima@gmail.com</li>
                <li className="list-group-item"> <b>Contact</b> : 8832543721</li>
                <li className="list-group-item"> <b>City</b> : Bhopal</li>
                <li className="list-group-item"> <b>Last Place Seen</b> : City Park</li>
              </ul>
              <div className="card-body text-center">
                <button className="btn btn-primary buy-btn">Contact</button>
              </div>
            </div>

            <div className="card">
              <img src={Lost3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title buy-name">Max</h5>
              </div>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item"> <b>Pet Type</b> : Dog</li>
                <li className="list-group-item"> <b>Color</b> : Black</li>
                <li className="list-group-item"> <b>Breed</b> : Retriever</li>
                <li className="list-group-item"> <b>Owner Name</b> : Ankit Tiwari</li>
                <li className="list-group-item"> <b>Email</b> : ankit@gmail.com</li>
                <li className="list-group-item"> <b>Contact</b> : 7039945421</li>
                <li className="list-group-item"> <b>City</b> : Delhi</li>
                <li className="list-group-item"> <b>Last Place Seen</b> : Vijay Nagar</li>
              </ul>
              <div className="card-body text-center">
                <button className="btn btn-primary buy-btn">Contact</button>
              </div>
            </div>

            <div className="card">
              <img src={Lost4} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title buy-name">Bella</h5>
              </div>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item"> <b>Pet Type</b> : Cat</li>
                <li className="list-group-item"> <b>Color</b> : Black n White</li>
                <li className="list-group-item"> <b>Breed</b> : Maine Coon</li>
                <li className="list-group-item"> <b>Owner Name</b> : Kartik Tyagi</li>
                <li className="list-group-item"> <b>Email</b> : kartik@gmail.com</li>
                <li className="list-group-item"> <b>Contact</b> : 6649885401</li>
                <li className="list-group-item"> <b>City</b> : Gujrat</li>
                <li className="list-group-item"> <b>Last Place Seen</b> : Central Mall</li>
              </ul>
              <div className="card-body text-center">
                <button className="btn btn-primary buy-btn">Contact</button>
              </div>
            </div>

          </div>
          <hr />
        </div>

        <div className="sell-content-container text-center">
          <h1>Want to report a lost complaint?</h1>

          <div className="signup-block">
            <div className="container form-control signup">
              <form>
                <div className="form-group mb-3 ">
                  <input type="name"
                    className="form-control"
                    placeholder="Owner Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <input type="number"
                    className="form-control"
                    placeholder="Contact"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea className="form-control"
                    rows="2"
                    placeholder="Address"></textarea>
                </div>
                <div className="form-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Pet Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Pet Type"
                  />
                </div>
                <div className="form-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Breed"
                  />
                </div>
                <div className="form-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Color"
                  />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="form-group sign-up request-btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
