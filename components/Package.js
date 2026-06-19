"use client";

import { Nav, Tab } from "react-bootstrap";

const Package1 = () => {
  return (
    <section
      className="choose-package-section bg-cover section-padding"
      style={{ backgroundImage: 'url("assets/img/choose-bg.jpg")' }}
    >
      <div className="container">
        <div className="choose-package-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="choose-package-content">
                <div className="section-title">
                  <span className="wow fadeInUp">CHOOSE PACKAGE</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Choose Ultra-Fast Internet Package For Usage
                  </h2>
                </div>
                <Tab.Container defaultActiveKey={"tab-1"}>
                  <Nav as={"ul"} className="nav" role="tablist">
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-1" href="#tab-1">
                        10 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-2" href="#tab-2">
                        20 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-3" href="#tab-3">
                        30 Mbps
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="tab-1" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div
                            className="price-monthly wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <h5>
                              <sub>$</sub>25<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div
                            className="price-installation wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <h5>
                              <sub>$</sub>35<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list wow fadeInUp" data-wow-delay=".7s">
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-2" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              <sub>$</sub>45<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              <sub>$</sub>65<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-3" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              <sub>$</sub>85<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              <sub>$</sub>99<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Preaching Worship An Online Family
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Package1;
