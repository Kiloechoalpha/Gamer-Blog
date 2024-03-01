import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      
      <div className={classes.image}>
        <Image
          src="/images/site/bk.png"
          alt="kiloechoalpha"
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, I am Kiloechoalpha</h1>
      <p>
      I am an OG in the gaming world , I share my insights, experiences, and thoughts on various games, check out Angry Ape gaming on YouTube.
      </p>
    </section>
  );
}

export default Hero;
