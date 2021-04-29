
export default function About( {el} ) {
  return (
    <div ref={el} className="bg-blue-450 w-screen h-screen flex text-white text-center">
      <div className="m-auto flex flex-col">
        <div className="py-4">
          <img
            className="h-32 w-32 mx-auto my-16"
            src='https://res.cloudinary.com/bobu/image/upload/v1618730574/wmp/WMM_Logo_Small_-01_wfnclb.png'
            alt="Logo"
            
          />
          <p>WINNIE MADIKIZELA MANDELA PRODUCTIONS</p>
        </div>
        <div className="h-8 sm:h-32 vl mx-auto"></div>
        <div className="py-4">
          <p className="w-96 sm:px-0 pl-4 pr-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}