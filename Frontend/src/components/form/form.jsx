import React from "react";
const emailState = { email: "", error: "" };

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!this.state.email || regex.test(this.state.email) === false) {
      this.setState({
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  }
  onSubmit() {
    if (this.emailValidation()) {
      console.log(this.state);
      this.setState(emailState);
    }
  }

  render() {
    return (
      <div>
        {/* form for add business */}
        <form className="row g-3 needs-validation" novalidate>
          {/* Lable for Name of Organisation */}
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              Name of Organisation
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid Organisation name.
            </div>
          </div>

          {/* Lable for Contact No. */}
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Phone/Mobile No.
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid Phone/Mobile No.
            </div>
          </div>

          {/* Lable for E-mail */}
          <div className="col-md-4">
            <label for="validationCustom03" className="form-label">
              E-mail Id
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              className="form-control"
            />
            <span className="text-danger">{this.state.error}</span>
          </div>

          {/* Lable for House No./Plot No. */}
          <div className="col-md-4">
            <label for="validationCustom04" className="form-label">
              House No./Plot No.
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom04"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid House No./Plot No..
            </div>
          </div>

          {/* Lable for Street name  */}
          <div className="col-md-4">
            <label for="validationCustom05" className="form-label">
              Street name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid street name.
            </div>
          </div>

          {/* Lable for Name of City  */}
          <div className="col-md-4">
            <label for="validationCustom06" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom06"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

          {/* Lable for Name of District  */}
          <div className="col-md-4">
            <label for="validationCustom07" className="form-label">
              District
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom07"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid district.
            </div>
          </div>

          {/* Lable for Name of State */}
          <div className="col-md-4">
            <label for="validationCustom08" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom08"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid State.
            </div>
          </div>

          {/* Lable for Name of Country */}
          <div className="col-md-4">
            <label for="validationCustom09" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom09"
              value="India"
              required
            />
          </div>

          {/* Lable for Pincode */}
          <div className="col-md-3">
            <label for="validationCustom10" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom10"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please provide a valid pincode.
            </div>
          </div>

          {/* Lable for Confirmation */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Please confirm you have filled all details carefully.
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => this.onSubmit()}
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormComponent;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classNameList.add("was-validated");
      },
      false
    );
  });
})();
