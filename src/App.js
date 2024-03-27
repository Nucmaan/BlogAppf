import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import ViewPost from "./pages/CreatePost/ViewPost";
import Edit from "./pages/CreatePost/Edit";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view/:id" element={<ViewPost />} />

        <Route element={<PrivateRoute />}>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
