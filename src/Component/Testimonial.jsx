import React from "react";
import "./styles/Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div id="home-testimonials">
        <div class="home-headings-testimonials">
          <h1 class="h1-heading-testimonials">Hear from our patients</h1>
          <h1 class="h2-heading-testimonials">Testimonials & Stories</h1>
        </div>

        <div>
          <section class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
              <ul class="splide__list">
                <div class="splide__slide">
                  <div class="homepage-testimonial-subdiv1">
                    <img src="./home_image/5cmx6cm.JPG" alt="image" />
                    <p>Ajay Jaishwal</p>
                  </div>
                  <hr class="homepage-hr" />
                  <div class="homepage-testimonial-subdiv2">
                    <p>
                      In my experience here, I found the treatment given to
                      patients to be excellent. All reports were ready at the
                      committed time, and everything was so efficient and
                      adequately taken care of, that I am considering making the
                      Velachery clinic my regular source of care.
                    </p>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="homepage-testimonial-subdiv1">
                    <img src="./images/Navtej-1594209185257.jpg" alt="image" />
                    <p>Abhishek</p>
                  </div>
                  <hr class="homepage-hr" />
                  <div class="homepage-testimonial-subdiv2">
                    <p>
                      The nurses, radiology technician and the phlebotomist all
                      were very helpful. Getting an appointment was easy and the
                      waiting time for a doctor was also very less. Everything
                      was easy and hassle free. I will consider making this my
                      regular source of care.
                    </p>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="homepage-testimonial-subdiv1">
                    <img src="./home_image/kohli.jpg" alt="image" />
                    <p>Virat Kohli</p>
                  </div>
                  <hr class="homepage-hr" />
                  <div class="homepage-testimonial-subdiv2">
                    <p>
                      The billing was fast and the phlebotomist and radiology
                      technician were very professional. Reports were ready on
                      time and the doctor directed nicely about the diagnosis
                      and follow ups. Given the services, I plan to make this my
                      regular source of care.
                    </p>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="homepage-testimonial-subdiv1">
                    <img src="./home_image/ambani_nita.jpg" alt="image" />
                    <p>Nita Ambani</p>
                  </div>
                  <hr class="homepage-hr" />
                  <div class="homepage-testimonial-subdiv2">
                    <p>
                      {" "}
                      I particularly, liked the atmosphere there. The doctors
                      are very good in explaining the diagnosis, treatments,
                      follow-ups and referrals and the staff is also very
                      efficient. The reports were ready on time and I would like
                      to come here for my regular healthcare services.
                    </p>
                  </div>
                </div>
                <div class="splide__slide">
                  <div class="homepage-testimonial-subdiv1">
                    <img src="./home_image/deepika.jpg" alt="image" />
                    <p>Deepika Padukone</p>
                  </div>
                  <hr class="homepage-hr" />
                  <div class="homepage-testimonial-subdiv2">
                    <p>
                      During the course of my treatment, the staffs was very
                      supportive and took really good care of me. The services
                      provided at the clinic as well as the reports of tests
                      etc. were provided on time and everything was done in a
                      very efficient manner.
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
