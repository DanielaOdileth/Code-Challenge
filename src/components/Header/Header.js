import React from "react";
import { useHistory } from 'react-router-dom'


/**
 * Header stateful function component
 * @param {*} props contains the variable 'showBackButton' which indicate the text will be returning it.
 *  if showBackButton is true returns 'Random Posts' if not returns 'Back'
 */
const Header = (props) => {
    /**
     * useHistory() to return to the main window after looking the comments by posts
     */
    const history = useHistory();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                {props.showBackButton ?
                    <span data-testid="backLabel" className="navbar-brand mb-0 h1" onClick={() => { history.goBack() }} style={{ cursor: "pointer" }}>Back</span>
                    : <span data-testid="postLabel" className="navbar-brand mb-0 h1">Random Posts</span>}

            </div>
        </nav>

    );
}

export default Header;