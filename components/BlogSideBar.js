import Link from "next/link";

const BlogSideBar = () => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Search</h3>
          </div>
          <div className="search_widget">
            <form action="#">
              <input type="text" placeholder="Keywords here...." />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Popular Feeds</h3>
          </div>
          <div className="popular-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp1.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                    Keep your business safe and ensure high
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  24th March 2024
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp2.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                    We’ve been a strategy thought leader for nearly
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  25th March 2024
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp3.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="news-details">
                    This week’s top stories and about It
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  26th March 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Categories</h3>
          </div>
          <div className="widget_categories">
            <ul>
              <li>
                <Link href="news">
                  Cloud Service <span>23</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Web Development <span>24</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Ui/Ux Designing <span>11</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  IT Management <span>05</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Data Visualization <span>06</span>
                </Link>
              </li>
              <li>
                <Link href="news">
                  Security System <span>10</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Never Miss News</h3>
          </div>
          <div className="social-link">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Popular Tags</h3>
          </div>
          <div className="tagcloud">
            <Link href="news">IT Technology</Link>
            <Link href="news-details">Software</Link>
            <Link href="news-details">Design</Link>
            <Link href="news-details">Service</Link>
            <Link href="news-details">Development</Link>
            <Link href="news-details">Digital</Link>
            <Link href="news-details">Cyber</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSideBar;
