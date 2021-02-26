import React from "react";
import Search from "./Search";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Employee Directory</h1>
            <p>Search here:</p>
            <Search
                // value={props.value}
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
            />
        </div>

    );
}

export default Header;