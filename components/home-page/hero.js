import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      
      <div className={classes.image}>
        <Image
          src="/images/site/bk.png"
          alt="kiloechoalpha"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Kiloechoalpha</h1>
      <p>
      I am passionate about video games and regularly share my insights, experiences, and thoughts on various gaming titles through my blog.
      </p>
    </section>
  );
}

export default Hero;
