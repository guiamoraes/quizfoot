import Head from 'next/head'
import styled from 'styled-components'

function IndexPage() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />        
        <title>Quiz Foot</title>
        <meta name="title" content="Quiz Foot" />
        <meta name="description" content="Quiz Foot criado durante imersao Alura  React Next" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quizfoot.vercel.app/" />
        <meta property="og:title" content="Quiz Foot" />
        <meta property="og:description" content="Quiz Foot criado durante imersão Alura  React Next" />
        <meta property="og:image" content="https://images5.alphacoders.com/387/387711.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quizfoot.vercel.app/" />
        <meta property="twitter:title" content="Quiz Foot" />
        <meta property="twitter:description" content="Quiz Foot criado durante imersão Alura  React Next" />
        <meta property="twitter:image" content="https://images5.alphacoders.com/387/387711.jpg"></meta>
      </Head>
    </div>
  )
}

export default IndexPage