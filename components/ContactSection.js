import ContactBox from "./ContactBox";

const ContactSection = () => {
  return (
    <section
      className="contact-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
      id="contact"
    >
      <div className="contact-image">
        <img src="assets/img/contact-2.png" alt="contact-img" />
      </div>
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title style-2">
                  <span className="wow fadeInUp">IT Support Help</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    let,s work together
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  We denounce with righteous indignation and like men <br />
                  beguiled and demoralized by the charms
                </p>
                <div className="contact-info-area">
                  <div
                    className="contact-info-items mb-4 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <p>Call For Inquiry</p>
                      <h3>
                        <a href="tel:+23645689622">+236 (456) 896 22</a>
                      </h3>
                    </div>
                  </div>
                  <div
                    className="contact-info-items mb-4 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="content">
                      <p>Send Us Email</p>
                      <h3>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h3>
                    </div>
                  </div>
                  <div
                    className="contact-info-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>Location</p>
                      <h3>734 H, Bryan Burlington, NC 27215 </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <ContactBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
