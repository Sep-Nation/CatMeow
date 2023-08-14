import { globalStyles } from "@/styles/global"
import { AppProps } from "next/app"

import logoEximio from '../assets/Logo-Eximiocacau.png'
import logoImg from '../assets/logo.svg'
import { Container, Header } from "@/styles/pages/app"

import Image from 'next/image'
globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoEximio} width={130}  alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}