import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links' >  <h3>About</h3> </Link>
          <Link to='/about/history' className='subnav_links' > <h3>History</h3> </Link>
          <Link to='/about/contact' className='subnav_links' > <h3>Contact</h3> </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history' />
            <Route component={Contact} path='/about/contact' />
            <Route
              path='/about'
              render={() => (
                <div>
                  <p>
                    A late night would scare any linguist away. Nothing of importance has your skin crawling. Sevenworm woke the prime minister. A glittering gem rains heavily. Lonely Henry stands upon somebody else's legs. Lonely Henry stands upon somebody else's legs. The person you were before loves to love. Spam is always a pleasure. A wave loudly clashing against a long shoreline is like a summer breeze. Utter nonsense visits Japan in the winter.
               </p>
                </div>
              )}

            />
          </Switch>
        </div>
      </div>
    )
  }
}