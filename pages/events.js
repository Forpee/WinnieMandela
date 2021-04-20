import Rcalendar from "../components/Calender"
import Footer from "../components/Footer"
import Nav from "../components/plainNav"
export default function Events({ data }){

    return(
        <div>
        <Nav/>
        <div className="bg-blue-250 flex h-96 mb-16 ">
        <h1 className="m-auto text-7xl text-white">EVENTS</h1>
      </div>
      <h1 className="text-5xl text-blue-350 mt-8 text-center">
            WHAT WE GOT GOING ON
          </h1>
          <p className='text-center pt-4 pb-10'>
            Lorem ipsum dolor sit elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
      <div className='container mx-auto px-16'>
      <Rcalendar data={data} />
      </div>
        <Footer/>

        </div>
    )
}

export async function getStaticProps(){

    const res = await fetch('https://strapi-943o.onrender.com/events')
    const data = await res.json()

    return{ 
        props: { data}
    }
}
