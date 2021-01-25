import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Comments from './components/Comments';
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/comments" component={Comments} />
                </Switch>
            </BrowserRouter >
        )
    }
}

export default App;