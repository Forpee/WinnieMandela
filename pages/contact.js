import Nav from "../components/plainNav";
import {
  Phone,
  Email,
  MarkunreadMailbox,
  LocationOn,
  Explore,
} from "@material-ui/icons";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div>
      <Nav />
      <div className="bg-blue-250 flex h-96 mb-16 ">
        <h1 className="m-auto text-7xl text-white">CONTACT US</h1>
      </div>
      <div className=" md:flex justify-evenly md:px-0 px-4">
        <div className='md:max-w-md'>
          <h1 className="text-5xl text-blue-350 mt-8 text-center">
            GET IN TOUCH
          </h1>
          <p className='text-center pt-4 pb-10'>
            Lorem ipsum dolor sit elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            <Phone /> Telephone: 011 123 4567
          </p>
          <p className='py-4'>
            <Email /> Email: example@gmail.com
          </p>
          <p>
            <MarkunreadMailbox /> Postbox: PO Box 0 Mandela Drive, UT 86440
          </p>
          <p className='py-4'>
            <LocationOn /> Physical Address: 50 Standard Road, 3244, JHb 
          </p>
          <p>
            <Explore /> Coordinates: 26.2385° S, 27.9088° E
          </p>
        </div>
        <div className='md:max-w-md'>
        <h1 className="text-5xl text-blue-350 mt-8 text-center">
            DROP US A LINE
          </h1>
          <p className='text-center pt-4 pb-8'>
            Lorem ipsum dolor sit elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
