import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const App = () => {
 return (
    <Router>
      <Switch>
        <Route path="/registro" component={RegisterForm} />
        {/* Aquí puedes agregar otras rutas */}
      </Switch>
    </Router>
 );
};

export default App;