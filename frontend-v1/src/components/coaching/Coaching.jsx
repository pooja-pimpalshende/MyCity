import "./coaching.css";
import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PrivateCoachingComponent() {
  const [coachings, setCoachings] = useState("");
  const url = "http://localhost:8081/coachings";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoachings(res.data);
        console.log(coachings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCoachings]);

  return (
    <div className="container-hostel">
      <div className="col-2"></div>
      <div className="col-8">
        <br />
        {coachings &&
          coachings.map(
            ({ id, coaching_name, email, city, district, phone_no, pincode, state, street, }) => (
              <section class="light">
                <div class="">
                  <article class="postcard light red">
                    <a class="postcard__img_link" href="#">
                      <img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                      <h1 class="postcard__title red">{coaching_name}</h1>
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
            )
          )}
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default PrivateCoachingComponent;