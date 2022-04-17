import React from 'react';
import Button from 'react-bootstrap/Button';
import "./cards.css";

function ScholarshipComponent({ scholarshipcomponent }) {
  return (
    <div className='row'>
      <div className='col-md-1'></div>

      <div className='col-md-10'>
        <br />

        <section class="light">
          <div class="">
            <article class="postcard light red">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title red">{scholarshipcomponent.title}</h1>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  <p>{scholarshipcomponent.description}</p>
                </div>
                <Button variant="primary" href={scholarshipcomponent.url}>Visit site</Button>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className='col-md-1'></div>
    </div>
  );
}

export default ScholarshipComponent;