import React from "react";
import useForm from "./useForm";
import validate from './validateInfo';
import 'bootstrap/dist/css/bootstrap.min.css';


// AddBusiness method for taking input from user
function AddLibrary() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <div className="card">
      <div className="form">
        <form className="addbusinessform" onSubmit={handleSubmit}>
          <br />
          <h2 className="card-header text-center">Add-Library</h2>
          <br />

          {/* first row  */}
          {/* Business Name we will implement it with select box later */}
          <div className="row">
            <div className="col-1"></div>

            {/* Name of college/hostel/etc */}
            <div className="form-inputs col-5">
              <label htmlFor="orgname" className="form-label">Type of business:</label>
              <input type="text" disabled placeholder="Add Library" />
            </div>

            <div className="form-inputs col-5">
              <label htmlFor="orgname" className="form-label">Library name:</label>
              <input id="orgname" type="text" name="orgname" placeholder="Enter library name"
                value={values.orgname} onChange={handleChange} />

              {errors.orgname && <p>{errors.orgname}</p>}
            </div>

            <div className="col-1"></div>
          </div>

          {/* second row */}
          {/* email input */}
          <div className="row">
            <div className="col-1"></div>

            <div className="form-inputs col-5">
              <label htmlFor="email" className="form-label">Email Id:</label>
              <input id="email" type="text" name="email" placeholder="Enter your email" value={values.email}
                onChange={handleChange} />

              {errors.email && <p>{errors.email}</p>}
            </div>

            {/* contact No. */}
            <div className="form-inputs col-5">
              <label htmlFor="phone" className="form-label">Phone No.:</label>
              <input id="phone" type="text" name="phone" placeholder="Enter your mobile number"
                value={values.phone} onChange={handleChange} />

              {errors.phone && <p>{errors.phone}</p>}
            </div>

            <div className="col-1"></div>
          </div>

          {/* third row */}
          {/* address fields */}
          <div className="row">
            <div className="col-1"></div>

            <div className="form-inputs col-5">
              <label htmlFor="plotno" className="form-label">Plot No/House No.:</label>
              <input id="plotno" type="text" name="plotno" placeholder="Plot No/House No."
                value={values.plotno} onChange={handleChange} />

              {errors.plotno && <p>{errors.plotno}</p>}
            </div>

            <div className="form-inputs col-5">
              <label htmlFor="street" className="form-label">Street:</label>
              <input id="street" type="text" name="street" placeholder="Street name"
                value={values.plotNo} onChange={handleChange} />

              {errors.street && <p>{errors.street}</p>}
            </div>

            <div className="col-1"></div>
          </div>

          {/* fourth row */}
          <div className="row">
            <div className="col-1"></div>

            <div className="form-inputs col-5">
              <label htmlFor="city" className="form-label">City:</label>
              <input id="city" type="text" name="city" placeholder="City name"
                value={values.city} onChange={handleChange} />

              {errors.city && <p>{errors.city}</p>}
            </div>

            <div className="form-inputs col-5">
              <label htmlFor="distt" className="form-label">District:</label>
              <input id="distt" type="text" name="distt" placeholder="District name"
                value={values.distt} onChange={handleChange} />

              {errors.distt && <p>{errors.distt}</p>}
            </div>

            <div className="col-1"></div>
          </div>

          {/* fifth row */}
          <div className="row">
            <div className="col-1"></div>

            <div className="form-inputs col-5">
              <label htmlFor="state" className="form-label">State:</label>
              <input id="state" type="text" name="state" placeholder="State name"
                value={values.state} onChange={handleChange} />

              {errors.state && <p>{errors.state}</p>}
            </div>

            <div className="form-inputs col-5">
              <label htmlFor="pin" className="form-label">Pincode:</label>
              <input id="pin" type="text" name="pin" placeholder="Pincode"
                value={values.pin} onChange={handleChange} />

              {errors.pin && <p>{errors.pin}</p>}
            </div>

            <div className="col-1"></div>
          </div>

          <br />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-8" style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="form-input-btn" style={{ width: '160px', height: '50px' }} type="submit" onClick={handleSubmit} >Add Library</button>
            </div>
            <div className="col-3"></div>
          </div>


        </form>
      </div>
    </div>
  );
}

export default AddLibrary;