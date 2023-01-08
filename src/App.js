
import TopBar from "./component/topBar/TopBar";
import Register from "./page/register/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./page/Home"
import Login from "./page/login/Login";
import Write from "./component/write/Write";
import Settings from "./page/settings/Settings";
import Single from "./page/single/Single";


function App() {
  const user = false
 
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
