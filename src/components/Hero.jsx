const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-red">
      <h1>I am a Frontend Developer...</h1>
      <p>
        ...who likes to craft solid and scalable frontend products with great
        user experiences.
      </p>

      <button className="btn flex">
        <i>G</i>
        <p>Github</p>
      </button>
      <div className="logo text-xl font-bold">
        {/* Logo buraya gelecek */}
        Logo
      </div>
    </div>
  );
};
export default Hero;
