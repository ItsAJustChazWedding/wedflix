"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
              <li>
                <Link href="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
              <li>
                <Link href="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="news">
              Services
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="service">Services</Link>
              </li>
              <li>
                <Link href="service-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link href="shows-details">
                  Shows
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="shows">Shows</Link>
                  </li>
                  <li>
                    <Link href="shows-details">Shows Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="team">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="pricing">Pricing</Link>
              </li>
              <li>
                <Link href="faq">Faq's</Link>
              </li>
              <li>
                <Link href="404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="shop-details">
              Shop
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="shop">Shop Page</Link>
              </li>
              <li>
                <Link href="shop-cart">Shop Cart</Link>
              </li>
              <li>
                <Link href="shop-details">Shop Details</Link>
              </li>
              <li>
                <Link href="checkout">Checkout</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="news">
              Blog
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="news">Blog</Link>
              </li>
              <li>
                <Link href="news-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "shows", title: "Shows" },
        { id: 3, href: "pricing", title: "Pricing" },
        { id: 4, href: "team", title: "Team" },
        { id: 5, href: "blog", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        <li className="has-dropdown active d-lg-none">
          <a
            href="#"
            className="border-none"
            onClick={() => activeMenuSet("home")}
          >
            Home
            <i className="fas fa-angle-down" />
          </a>
          <ul className="submenu" style={activeLi("home")}>
            <li>
              <Link href="/">Home 01</Link>
            </li>
            <li>
              <Link href="index-2">Home 02</Link>
            </li>
            <li>
              <Link href="index-3">Home 03</Link>
            </li>
            <li>
              <Link href="index-4">Home 04</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("home")}
          >
            <i className="far fa-plus" />
          </a>
        </li>
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <a href="#" onClick={() => activeMenuSet("Services")}>
                Services <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Services")}>
                <li>
                  <Link href="service">Services</Link>
                </li>
                <li>
                  <Link href="service-details">Service Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Services")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="has-dropdown">
              <a href="#" onClick={() => activeMenuSet("Pages")}>
                Pages
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Pages")}>
                <li className="has-dropdown">
                  <a href="#" onClick={() => multiMenuSet("Shows")}>
                    Shows
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Shows")}>
                    <li>
                      <Link href="show">Shows</Link>
                    </li>
                    <li>
                      <Link href="shows-details">Shows Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("Shows")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="#" onClick={() => multiMenuSet("Team")}>
                    Team
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Team")}>
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-details">Team Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => multiMenuSet("Team")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link href="pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="faq">Faq's</Link>
                </li>
                <li>
                  <Link href="404">404 Page</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Pages")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => activeMenuSet("Shop")}>
                Shop
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Shop")}>
                <li>
                  <Link href="shop">Shop Page</Link>
                </li>
                <li>
                  <Link href="shop-details">Shop Details</Link>
                </li>
                <li>
                  <Link href="shop-cart">Shop Cart</Link>
                </li>
                <li>
                  <Link href="checkout">Checkout</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Shop")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => activeMenuSet("Blog")}>
                Blog
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Blog")}>
                <li>
                  <Link href="news">Blog</Link>
                </li>
                <li>
                  <Link href="news-details">Blog Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("Blog")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li className="mean-last">
              <Link href="contact">Contact</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
