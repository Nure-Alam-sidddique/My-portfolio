import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitializationAuthentication from './Component/Firebase/firebase.init';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from "./Component/Pages/Home/Home/Home";
import ProductDetails from './Component/Pages/ProductDetails/ProductDetails';
import Scroll from './Component/Scroll/Scroll';
import { ScrollToTop } from './Component/ScrollToTop/ScrollToTop';


InitializationAuthentication();
function App() {
  return (
    <div className="App">
      <Router>
        <Scroll />
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects/:projectId" element={<ProductDetails />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
