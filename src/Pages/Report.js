import React from 'react'

export const Report = () => {
  return (
    <>
      <form>
        <div className="container report-container my-4">
          <div className="text-center">
            <span>REPORT AN ANIMAL ABUSE</span>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control"
              placeholder="XYZ" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control"
              placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Place of Incident</label>
            <input type="email" className="form-control"
              placeholder="Delhi" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Proof of Event</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="form-group mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">More</label>
            <textarea className="form-control"
              rows="2"
              placeholder="More about incident"></textarea>
          </div>
          <div className="form-group text-center report-btn">
            <button type="submit" className="btn btn-primary">Report</button>
          </div>
        </div>
      </form>
    </>
  )
}
