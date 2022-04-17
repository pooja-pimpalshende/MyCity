import React, { useEffect, useState } from "react";
import "./hostel.css";
import { Link } from "react-router-dom";
import axios from "axios";

function PrivateHostelComponent() {
  const [hostels, setHostels] = useState("");

  const url = "http://localhost:8081/hostels";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setHostels(res.data);
        console.log(hostels);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setHostels]);

  return (
    <div className="container-hostel">
      <div className="col-2"></div>
      <div className="col-8">
        <br />
        {hostels &&
          hostels.map(({ id, hostel_name, email, city, district, phone_no, pincode, state, street, }) => (
            <section class="light">
              <div class="">
                <article class="postcard light red">
                  <a class="postcard__img_link" href="#">
                    <img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title red">{hostel_name}</h1>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                      <p><b>Address: </b>{street}, City - {city}, Distt - {district}, </p>
                      <p><b>State: </b>{state}, <b>Pincode: </b>{pincode}</p>
                      <p><b>Email: </b>{email}, <b>Phone: </b>{phone_no}</p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          ))}
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default PrivateHostelComponent;