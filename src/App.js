import './App.css';
import NavBar from './components/navbar/navbar'
import MainWall from './components/greetingwall/greetingWall'
import Solutions from './components/solutions/solutions'
import Form from './components/form/form'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Doings from './components/whatWeDo/whatWeDo'
import Description from "./components/howItWorks/description";


function App() {
  return (
    <div className="App">
        <MainWall/>
        <Doings/>
        <Description/>
        <Solutions/>
        <About/>
        <Form/>
        <Contact/>
    </div>
  );
}

export default App;
