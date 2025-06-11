import React from 'react'
import Layout from '../components/layout'
import ProductCards from '../components/ProduxtCards'
import Hero from '../components/Hero'
import EditorsPick from '../components/EditorsPick'
import BestSeller from '../components/BestSeller'
import Hero2 from '../components/Hero2'
import JoinUs from '../components/JoinUs'
 
export default function HomePage() {
  return (
    <Layout>
        <Hero />
        <EditorsPick />
        <BestSeller />
        <ProductCards />
        <Hero2 />
        <JoinUs />
    </Layout>
  )
}