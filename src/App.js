import "./styles.css";
import Posts from "./Posts";
import Albumphotos from "./Albumphotos";
import Users from "./Users";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <h1>JSON placeholder App</h1>
        <ul>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/Albumphotos">Album photos</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/Posts" element={<Posts />}></Route>
          <Route exact path="/Albumphotos" element={<Albumphotos />}></Route>
          <Route exact path="/Users" element={<Users />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
