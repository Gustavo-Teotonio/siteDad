import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PromotionBar from "./components/PromotionBar/promotion.jsx"
import CompHeader from "./components/Header/compHeader.jsx"
import Banner from "./components/Banner/index.jsx"
import Section from "./components/Section/index.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PromotionBar/>
    <CompHeader/> 
    <Banner/>
    <Section title = "Today" subtitle = "Flash Sales" products={true}/>
    <Section title = "Categories" subtitle = "Browse By Category" products={false}/>
  </StrictMode>
)
