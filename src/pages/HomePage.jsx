import React from 'react'
import Layout from '../components/layout'
import ProductCards from '../components/ProduxtCards'
import Hero from '../components/Hero'
import EditorsPick from '../components/EditorsPick'
import BestSeller from '../components/BestSeller'
 
export default function HomePage() {
  return (
    <Layout>
        <Hero />
        <EditorsPick />
        <BestSeller />
        <ProductCards />
        

    </Layout>
  )
}