import "./App.css";

import Header from "./component/navBar/Header";
import Fotter from "./component/fotter/Fotter";
import Intro from "./component/myCrad/Intro";
import About from "./component/myCrad/About";
import pic from "./image/img_parallax.jpg";

import Video from "./component/videocard/Video";

function App() {
  return (
    <>
      <Header></Header>

      <Intro></Intro>
      <div className="about">
        <About></About>
      </div>
      <Video></Video>

      <Fotter></Fotter>
    </>
  );
}

export default App;
