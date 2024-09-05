import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateRoom from './createRoom';
import BookRoom from './BookRoom';
import RoomList from './RoomList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-room">Create Room</Link>
            </li>
            <li>
              <Link to="/book-room">Book Room</Link>
            </li>
            <li>
              <Link to="/room-list">Room List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create-room">
            <CreateRoom />
          </Route>
          <Route path="/book-room">
            <BookRoom />
          </Route>
          <Route path="/room-list">
            <RoomList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
