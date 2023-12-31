import { HomeContainer, Product } from "@/styles/pages/home"
import { styled } from "../styles"

import {useKeenSlider} from 'keen-slider/react'

import camiseta1 from '../assets/Shirt/1.png';
import camiseta2 from '../assets/Shirt/2.png';
import camiseta3 from '../assets/Shirt/3.png';
import camiseta4 from '../assets/Shirt/4.png';
import ps5 from '../assets/videogames/ps5.webp';
import Image from "next/image";

import 'keen-slider/keen-slider.min.css';
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
      <Product key={product.id} className="keen-slider__slide">
        <Image src={product.imageUrl} width={520} height={480} alt="" />

        <footer>
          <strong>{product.name}</strong>
          <span>R$ {product.price}</span>
        </footer>
      </Product>
        )
      })}
      </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products
    }
  }
}