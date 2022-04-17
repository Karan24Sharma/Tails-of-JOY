import React from 'react';
import adopt1 from '../img/adopt1.jpg';
import adopt2 from '../img/adopt2.jpg';
import adopt3 from '../img/adopt3.jpg';
import adopt4 from '../img/adopt4.jpg';
// import {Navbar} from '../Components/Navbar';

export const Adopt = () => {
  return (
    <>
      <div className=" my-5 container adopt-container">

        <div className="adopt-more container">
          <h1>REASONS TO ADOPT</h1>
          <p>Every year, approximately 6.5 million pets enter animal shelters nationwide, and 1.5 million become euthanized. And with the current shelter crisis, numbers are on the rise. But you can help!
            Not only are pets scientifically proven to reduce stress levels and improve blood pressure, but no one can offer the unconditional love and companionship a pet can.</p>
        </div>

        <div className="adopt-content d-inline-flex">

          <div className="card">
            <img src={adopt1} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title adopt-name">Luna</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #1</li>
              <li className="list-group-item"> <b>Age</b> : 8 months</li>
              <li className="list-group-item"> <b>Breed</b> : Persian Cat</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary adopt-btn"><a href="https://naankuse.com/donate/adopt-an-animal/?gclid=EAIaIQobChMItYGL3omb9wIVDXZgCh36qgJ0EAAYAiAAEgJdofD_BwE" target="_blank" rel="noreferrer">Read More</a></button>
            </div>
          </div>

          <div className="card">
            <img src={adopt2} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title adopt-name">Coco</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #2</li>
              <li className="list-group-item"> <b>Age</b> : 1 year</li>
              <li className="list-group-item"> <b>Breed</b> : Aspin</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary adopt-btn"><a href="https://naankuse.com/donate/adopt-an-animal/?gclid=EAIaIQobChMItYGL3omb9wIVDXZgCh36qgJ0EAAYAiAAEgJdofD_BwE" target="_blank" rel="noreferrer">Read More</a></button>
            </div>
          </div>

          <div className="card">
            <img src={adopt3} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title adopt-name">Daisy</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #3</li>
              <li className="list-group-item"> <b>Age</b> : 13 months</li>
              <li className="list-group-item"> <b>Breed</b> : Maine Coon</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary adopt-btn"><a href="https://naankuse.com/donate/adopt-an-animal/?gclid=EAIaIQobChMItYGL3omb9wIVDXZgCh36qgJ0EAAYAiAAEgJdofD_BwE" target="_blank" rel="noreferrer">Read More</a></button>
            </div>
          </div>

          <div className="card">
            <img src={adopt4} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title adopt-name">Neo</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item"> <b>Id</b> : #4</li>
              <li className="list-group-item"> <b>Age</b> : 3 months</li>
              <li className="list-group-item"> <b>Breed</b> : Pug</li>
            </ul>
            <div className="card-body text-center">
              <button className="btn btn-primary adopt-btn"><a href="https://naankuse.com/donate/adopt-an-animal/?gclid=EAIaIQobChMItYGL3omb9wIVDXZgCh36qgJ0EAAYAiAAEgJdofD_BwE" target="_blank" rel="noreferrer">Read More</a></button>
            </div>
          </div>
        </div>

        <hr />

      </div>
    </>
  )
}
