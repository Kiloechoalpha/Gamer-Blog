import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="https://www.google.com/imgres?q=gamer%20png&imgurl=https%3A%2F%2Fgraphicsfamily.com%2Fwp-content%2Fuploads%2Fedd%2F2021%2F02%2FGamers-Mascot-Logo-PNG-Transparent.png&imgrefurl=https%3A%2F%2Faviate.pl%2FGamers-Mascot-Logo-GraphicsFamily-1808848.html&docid=ylmVI_aH8AZY-M&tbnid=E8X5fhOZlgduJM&vet=12ahUKEwjMwKbnv6qFAxVgiv0HHUehBEsQM3oECDsQAA..i&w=2500&h=2500&hcb=2&ved=2ahUKEwjMwKbnv6qFAxVgiv0HHUehBEsQM3oECDsQAA" 
          alt="Angry Ape Gaming Logo" // alt text
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, I am Kiloechoalpha</h1>
      <p>
        I am an OG in the gaming world. I share my insights, experiences, and thoughts on various games. Check out Angry Ape Gaming on YouTube.
      </p>
    </section>
  );
}

export default Hero;
