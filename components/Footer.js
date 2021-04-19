export default function Footer(){
    return(
        <footer className=" bg-blue-450 mt-32 pt-10 overflow-hidden text-white ">
        <div className="w-screen sm:flex justify-evenly">
          <div className=" sm:w-1/4">
            <hr className="border-1 border-white"></hr>
          </div>
          <div>
            <h1 className="text-3xl text-center">WMMP</h1>
          </div>
          <div className="sm:w-1/4">
            <hr className="border-1 border-white"></hr>
          </div>
        </div>
        <div className="sm:flex justify-evenly pt-10">
          <div>
            <ul className="text-center">
              <a href="/">
                <li> HOME</li>
              </a>
              <a href="/project-principles">
                <li>ENDORSEMENTS</li>
              </a>
              <a href="/events">
                <li>EVENTS</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-evenly sm:py-0 py-10">
            <img src="/facebook.svg"></img>
            <img className="px-5" src="/twitter.svg"></img>
            <img src="/instagram.svg"></img>
          </div>
          <div>
            <ul className="text-center">
              <a href="/contact-us">
                <li> CONTACT </li>
              </a>
              <a href="/cv">
                <li>NEWS FEED</li>
              </a>
              <a href="/about">
                <li>ABOUT</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="pt-32 mb-3">
          <p className="text-center"> © 2021 | MAINTAINED BY GLASS HOUSE MEDIA</p>
        </div>
      </footer>
    )
}