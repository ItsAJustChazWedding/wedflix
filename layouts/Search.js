"use client";
const Search = () => {
  const onClick = () => {
    document.querySelector(".search-wrap").classList.remove("d-block");
  };
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <i
          className="fas fa-times search-close"
          id="search-close"
          onClick={() => onClick()}
        />
        <div className="search-cell">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
