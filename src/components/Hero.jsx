const Hero = () => {
  return (
    <div className="hero flex h-1/5 w-screen relative items-stretch z-10 ">
      <div className="hero-cont-design flex flex-row absolute h-full inset-0 -z-10 ">
        <div className="purple w-[66%] bg-indigo-700 "></div>
        <div className="green w-[34%] bg-lime-300 "></div>
      </div>
      <div className=" container flex flex-row  justify-between mx-auto w-[960px] h-[376px] gap-x-10 border-black border-2 mt-14 p-0 ">
        <div className="hero-left flex flex-col w-[550px] pt-20 ">
          <h1 className="text-5xl text-lime-300 font-bold leading-30 mb-6 pr-40 ">
            I am a Frontend Developer...
          </h1>
          <p className="text-zinc-200">
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="h-3 gap-x-2 bg-zinc-50 px-4 py-4 flex flex-row items-center ">
            <i>G</i>
            <p>Github</p>
          </div>
        </div>
        <img
          className="  w-[350px] bg-blue-500 rounded-[32px] object-cover"
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1vchrSQ853YbMXncBSBwkr/48c1aa08827e27f61792e4bfa6077bca/UX_design_portfolio.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000"
          alt="Revalidation tile image"
        />
      </div>
    </div>
  );
};
export default Hero;
