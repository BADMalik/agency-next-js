import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-around p-3 items-center">
        <div className="">
          {" "}
          <img alt="logo" src="/left-logo-banner.png" />
        </div>
        <div className="hidden sm:block flex">
          <div className=" sm:flex flex-row flex-between flex-grow items-center">
            <div className="mx-8 links">Home</div>
            <div className="mx-8 links">Services</div>
            <div className="mx-8 links">Our Project</div>
            <div className="mx-8 links">About Us</div>
          </div>
        </div>
        <div className="hidden sm:block flex-item  links border-solid border rounded border-grey-500 px-8 py-1">
          Contact us
        </div>
        <div className="justtify-around sm:hidden ">
          <img src="sort.svg" />
        </div>
      </nav>
    </div>
  );
}
