import Nav from "../components/Nav";
import Intro from "../components/Intro";
import About from "../components/About";
import Room from "../components/Room";
import Second from "../components/Second";
import Footer from "../components/Footer";
import useColor from '../hooks/useColor'
export default function Home() {
  const {isBlue, element, second} = useColor()
  return (
    <div>
      <div className='intro'>
        <Nav blue ={isBlue} />
        <Intro />
      
      </div>
      <About el={element} />
      <Room />
      <Second sel={second}/>
      <Footer/>
    </div>
  );
}
