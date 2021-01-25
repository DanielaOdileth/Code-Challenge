import React from "react";
import { useHistory } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                {props.showBackButton ?
                    <span className="navbar-brand mb-0 h1" onClick={() => { history.goBack() }} style={{ cursor: "pointer" }}>Back</span>
                    : <span className="navbar-brand mb-0 h1">Random Posts</span>}

            </div>
        </nav>

    );
}

export default Header;