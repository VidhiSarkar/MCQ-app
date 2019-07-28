import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import McqQuestions from './containers/McqQuestions';
const App =()=> {
    const routes = (
        <Switch>
            <Route path="/" exact component={McqQuestions} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <div>
            {routes}
        </div>
    );
};

export default withRouter( ( App ) );