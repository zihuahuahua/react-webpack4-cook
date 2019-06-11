import React from 'react'
import { Router, Route, Link } from 'react-router'
import Count from '@/pages/Count'
import Home from '@/pages/Home'

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="Home" component={Home}/>
      <Route path="Count" component={Count}/>
    </Route>
  </Router>
), document.body)