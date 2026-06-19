"use client";

import { Nav, Tab } from "react-bootstrap";

const Service1 = () => {
  return (
    <section className="trusted-client-section fix section-padding pt-0 mg-top-20">
      <div className="container">
        <div className="trusted-client-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div
                className="trusted-client-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/feature/trusted.jpg")',
                }}
              >
                <div className="icon-box">
                  <img
                    src="assets/img/circle.png"
                    alt="img"
                    className="text-circle"
                  />
                  <div className="icon">
                    <img src="assets/img/icon.png" alt="icon-img" />
                  </div>
                </div>
                <div className="counter-main-area">
                  <div className="counter-area">
                    <div className="counter-items">
                      <h2>
                        <span className="count">500</span>+
                      </h2>
                      <h3>Awesome clients</h3>
                    </div>
                    <div className="counter-items">
                      <h2>
                        <span className="count">5</span>k+
                      </h2>
                      <h3>Awesome clients</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 mt-5 mt-xl-0">
              <div className="trusted-content">
                <div className="section-title">
                  <span className="wow fadeInUp">Live Sports</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Live Sport and TV-shows <br /> for best friends
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Transmds is the world’s driving worldwide coordinations
                  supplier — we <br /> uphold industry and exchange the
                  worldwide trade of merchandi
                </p>
                <div className="single-tab-items">
                  <Tab.Container defaultActiveKey={"mission"}>
                    <Nav as={"ul"} className="nav mb-4" role="tablist">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link as={"a"} href="#mission" eventKey="mission">
                          Our Mission
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} href="#strategy" eventKey="strategy">
                          Our Strategy
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} href="#vision" eventKey="vision">
                          our vision
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="mission" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul className="wow fadeInUp" data-wow-delay=".3s">
                            <li>
                              <i className="fas fa-check" />
                              100 Mbps youtube
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Connect Multiple Users
                            </li>
                          </ul>
                          <div className="icon-area">
                            <div
                              className="icon-items d-flex align-items-center gap-3 wow fadeInUp"
                              data-wow-delay=".5s"
                            >
                              <div className="icon">
                                <i className="flaticon-trophy" />
                              </div>
                              <h6>Award Winning</h6>
                            </div>
                            <div
                              className="icon-items d-flex align-items-center gap-3 wow fadeInUp"
                              data-wow-delay=".7s"
                            >
                              <div className="icon">
                                <i className="flaticon-support" />
                              </div>
                              <h6>Best Support</h6>
                            </div>
                          </div>
                          <div
                            className="pro-items wow fadeInUp"
                            data-wow-delay=".9s"
                          >
                            <div className="pro-head">
                              <h6 className="title">
                                Real Technology Solution
                              </h6>
                              <span className="point">75%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="strategy" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              100 Mbps youtube
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Connect Multiple Users
                            </li>
                          </ul>
                          <div className="icon-area">
                            <div className="icon-items d-flex align-items-center gap-3">
                              <div className="icon">
                                <i className="flaticon-trophy" />
                              </div>
                              <h6>Award Winning</h6>
                            </div>
                            <div className="icon-items d-flex align-items-center gap-3">
                              <div className="icon">
                                <i className="flaticon-support" />
                              </div>
                              <h6>Best Support</h6>
                            </div>
                          </div>
                          <div className="pro-items">
                            <div className="pro-head">
                              <h6 className="title">
                                Real Technology Solution
                              </h6>
                              <span className="point">75%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="vision" className="tab-pane fade">
                        <div className="tab-content-items">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              100 Mbps youtube
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              Connect Multiple Users
                            </li>
                          </ul>
                          <div className="icon-area">
                            <div className="icon-items d-flex align-items-center gap-3">
                              <div className="icon">
                                <i className="flaticon-trophy" />
                              </div>
                              <h6>Award Winning</h6>
                            </div>
                            <div className="icon-items d-flex align-items-center gap-3">
                              <div className="icon">
                                <i className="flaticon-support" />
                              </div>
                              <h6>Best Support</h6>
                            </div>
                          </div>
                          <div className="pro-items">
                            <div className="pro-head">
                              <h6 className="title">
                                Real Technology Solution
                              </h6>
                              <span className="point">75%</span>
                            </div>
                            <div className="progress">
                              <div className="progress-value" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service1;
