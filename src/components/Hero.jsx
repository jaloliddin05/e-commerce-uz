import hero_img from "../images/iPhone-13-Pro-Max-silver-1000x1000 1.png";

const Hero = () => {
  return (
    <section className="header_hero">
      <div className="container hero_container">
        <h1 className="hero_heading">
          Аксессуары для <br /> Iphone 13 Pro Max
        </h1>
        <img
          src={hero_img}
          alt=""
          width={321}
          height={226}
          className="header_hero_img"
        />
      </div>
    </section>
  );
};

export default Hero;
