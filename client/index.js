import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const App = props => {
  return (
      <div className='router'>
        <Switch>
          <Route
            exact
            path='/neworder'
            component={NewOrder}
          />
        </Switch>
      </div>
  )
}

export default App;