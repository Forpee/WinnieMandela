import Nav from "../components/plainNav";
import Footer from "../components/Footer"
export default function About() {
  return (
    <div>
      <Nav />
      <div className="bg-blue-250 flex h-96 mb-16">
        <h1 className="m-auto text-7xl text-white">ABOUT US</h1>
      </div>
      <div className="container mx-auto px-32">
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
        <h1 className="text-blue-250 text-5xl mb-16 mt-8 text-center">OUR TEAM</h1>
        <br />
        <div className="grid grid-cols-3 gap-16">
          <div className=''>
            <img
              className="rounded-full mx-auto h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center my-4">LOREM IPSUM</h1>
            <p className='text-center'>CEO</p>
          </div>
          <div className=''>
            <img
              className="rounded-full mx-auto h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center my-4">LOREM IPSUM</h1>
            <p className='text-center'>CEO</p>
          </div>
          <div className=''>
            <img
              className="rounded-full mx-auto h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center my-4">LOREM IPSUM</h1>
            <p className='text-center'>CEO</p>
          </div>
        
        </div>
        <div className='flex justify-evenly my-32'>
        <div className=''>
            <img
              className="rounded-full mx-auto h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center my-4">LOREM IPSUM</h1>
            <p className='text-center'>CEO</p>
          </div>
          <div className=''>
            <img
              className="rounded-full mx-auto h-32 w-32"
              src="https://res.cloudinary.com/bobu/image/upload/v1618742861/wmp/wm_f8xmym.jpg"
            ></img>
            <h1 className="text-center my-4">LOREM IPSUM</h1>
            <p className='text-center'>CEO</p>
          </div>
        </div>
        
        <h1 className="text-blue-250 mb-6 text-3xl">WHAT WE DO</h1>
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
        <ul className="list-disc pl-8">
          <li>Content Development</li>
          <li>Academy Training</li>
          <li>Film Studios</li>
          <li>Digital Cast Agency</li>
          <li>Production</li>
        </ul>
        <h1 className="text-blue-250 text-3xl my-6">ENTERTAINMENT</h1>
        <ul className="list-disc pl-8">
          <li>Kids Shows</li>
          <li>Comedy</li>
          <li>Soapies</li>
          <li>Movies</li>
        </ul>
        <h1 className="text-blue-250 text-3xl my-6">ACADEMY TRAINING</h1>
        <p>
          We will traing actors/actresses, script writers, editors, producers,
          technicians etc They will all be placed on our platform and the
          existing contract we have with 19 sopies in SA
        </p>
        <h1 className="text-blue-250 text-3xl my-6">WHERE WE WORK</h1>
        <ul className="list-disc pl-8">
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
