import Nav from "../components/plainNav";
import Footer from "../components/Footer"
export default function About() {
  return (
    <div>
      <Nav />
      <div className="bg-blue-250 flex h-96 mb-16">
        <h1 className="m-auto text-7xl text-white">ABOUT US</h1>
      </div>
      <div className="container mx-auto">
        <h1 className="text-blue-250 text-3xl">WHO WE ARE</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <h1 className="text-blue-250 text-3xl">OUR TEAM</h1>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              className="rounded-full h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center">LOREM IPSUM</h1>
            <p>CEO</p>
          </div>
          <div>
            <img
              className="rounded-full h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center">LOREM IPSUM</h1>
            <p>CEO</p>
          </div>
          <div>
            <img
              className="rounded-full h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center">LOREM IPSUM</h1>
            <p>CEO</p>
          </div>
          <div>
            <img
              className="rounded-full h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center">LOREM IPSUM</h1>
            <p>CEO</p>
          </div>
          <div>
            <img
              className="rounded-full h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center">LOREM IPSUM</h1>
            <p>CEO</p>
          </div>
        </div>
        <h1 className="text-blue-250 text-3xl">WHAT WE DO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <ul className="list-disc">
          <li>Content Development</li>
          <li>Academy Training</li>
          <li>Film Studios</li>
          <li>Digital Cast Agency</li>
          <li>Production</li>
        </ul>
        <h1 className="text-blue-250 text-3xl">ENTERTAINMENT</h1>
        <ul className="list-disc">
          <li>Kids Shows</li>
          <li>Comedy</li>
          <li>Soapies</li>
          <li>Movies</li>
        </ul>
        <h1 className="text-blue-250 text-3xl">ACADEMY TRAINING</h1>
        <p>
          We will traing actors/actresses, script writers, editors, producers,
          technicians etc They will all be placed on our platform and the
          existing contract we have with 19 sopies in SA
        </p>
        <h1 className="text-blue-250 text-3xl">WHERE WE WORK</h1>
        <ul className="list-disc">
          <li>AFRICA</li>
          <li>EUROPE</li>
          <li>CHINA</li>
          <li>USA</li>
        </ul>
      
      </div>
      <Footer/>
    </div>
  );
}
