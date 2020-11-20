import "./sass/App.scss";
import Header from "./comonents/header";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./comonents/navbar";

AOS.init();

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="jumbotron">hello world</div>
      <div className="container">hello universe</div>
      <div className="jumbotron">hello world</div>
      <div className="jumbotron">hello world</div>
      <div className="jumbotron">hello world</div>
    </div>
  );
};

export default App;
