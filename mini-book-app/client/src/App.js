import AddBook from "./componenets/admin/AddBook";
import Books from "./componenets/user/Book/Books";
import Header from "./componenets/user/Header";
import './index.css'
import image from './assets/logo.png'
import image1 from './assets/banner.png'
import image2 from './assets/banner02.png'
import image3 from './assets/banner03.png'
import mentor from './assets/logo.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Home from "./componenets/user/Home/Home";
import BookDetail from "./componenets/admin/BookDetail";
import ReadMore from "./componenets/user/Book/ReadMore";
import Login from "./componenets/auth/Login";
import SignUP from "./componenets/auth/SignUp";
import MyP from "./MyP";
import { UserProvider } from "./componenets/user/UserContext";
import ShowBook from "./componenets/admin/ShowBook";
import Footers from "./componenets/user/Footer";

function App() {

  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const shouldRenderHeader = isAdminRoute;
  return (
    <>
      {/* Admin Routes */}
      <Router>
        <UserProvider>
          <div className="">
            <Routes>
              <Route exact path='/admin/*' element={<MyP />} />
              <Route exact path='/admin/add' element={<AddBook />} />
              <Route exact path='/admin/Books' element={<ShowBook />} />
              <Route exact path='admin/Books/:id' element={<BookDetail />} />
            </Routes>
          </div>
        </UserProvider>
      </Router>
      {/* User Routes */}
        <Router>
          <UserProvider>
            <div>
              {!shouldRenderHeader && <Header image={image} />}
              <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUP />} />
                <Route exact path='/' element={<Home image1={image1} image2={image2} image3={image3} mentor = {mentor} />} />
                <Route exact path='/books' element={<Books />} />
                <Route exact path='/detail/:id' element={<ReadMore />} />
              </Routes>
              <Footers />
            </div>
          </UserProvider>
        </Router>
    </>
  );
}
export default App;
