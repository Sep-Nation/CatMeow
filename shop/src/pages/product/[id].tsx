import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis minus cupiditate modi quidem? Inventore dolor eligendi, voluptatum illo sit minima sequi. Dignissimos quo quaerat quis architecto officiis, nobis iure!</p>
        <button>Copmprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}