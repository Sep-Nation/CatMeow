import { HomeContainer, Product } from "@/styles/pages/home"
import { styled } from "../styles"

import camiseta1 from '../assets/Shirt/1.png';
import camiseta2 from '../assets/Shirt/2.png';
import camiseta3 from '../assets/Shirt/3.png';
import camiseta4 from '../assets/Shirt/4.png';
import ps5 from '../assets/videogames/ps5.webp';
import Image from "next/image";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={ps5} width={520} height={480} alt="" />

        <footer>
          <strong>Playstation 5</strong>
          <span>R$ 4.999,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={ps5} width={520} height={480} alt="" />

        <footer>
          <strong>Playstation 5</strong>
          <span>R$ 4.999,00</span>
        </footer>
      </Product>
      </HomeContainer>
  )
}