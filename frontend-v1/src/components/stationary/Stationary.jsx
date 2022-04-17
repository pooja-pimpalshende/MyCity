import "./stationary.css";
import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function StationaryComponent() {
  const [stationarys, setStationarys] = useState("");
  const url = "http://localhost:8081/stationarys";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setStationarys(res.data);
        console.log(stationarys);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStationarys]);

  return (
    <div className="container-hostel">
      <div className="col-2"></div>
      <div className="col-8">
        <br />
        {stationarys &&
          stationarys.map(({ id, stationary_name, email, city, district, phone_no, pincode, state, street, }) => (
            <section class="light">
              <div class="">
                <article class="postcard light red">
                  <a class="postcard__img_link" href="#">
                    <img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                  </a>
                  <div class="postcard__text t-dark">
                    <h1 class="postcard__title red">{stationary_name}</h1>
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

export default StationaryComponent;