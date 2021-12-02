import { BrowserRouter as Router } from 'react-router-dom';
import InitializationAuthentication from './Component/Firebase/firebase.init';
import Header from './Component/Pages/Header/Header';
import Home from "./Component/Pages/Home/Home/Home";
import Scroll from './Component/Scroll/Scroll';
import { ScrollToTop } from './Component/ScrollToTop/ScrollToTop';

InitializationAuthentication();
function App() {
  return (
    <div className="App">
      <Router>
       <Scroll/>
        <Header></Header>
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> */}
        <Home></Home>
      </Router>
      <ScrollToTop/>
    </div>
  );
}

export default App;
