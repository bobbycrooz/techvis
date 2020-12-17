import "./sass/App.scss";
import Header from "./comonents/header";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./comonents/navbar";
import CountDown from "./comonents/countDown";

AOS.init();

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CountDown />
      <div className="jumbotron">hello world</div>
      <div className="container">hello universe</div>
      <div className="jumbotron">hello world</div>
      <div className="jumbotron">hello world</div>
      <div className="jumbotron">hello world</div>
    </div>
  );
};

export default App;
