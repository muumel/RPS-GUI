import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="bg">
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search" required />
            </div>
            <div classNames="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
