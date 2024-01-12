import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
import HeroSection from "./HeroSection"
import FooterSection from "./FooterSection"
import AboutUsSection from "./AboutUsSection"
import FeaturedServicesSection from "./FeaturedServicesSection"
import ServicesSection from './ServicesSection'
import TestimonialSection from './TestimonialSection'
import TeamSection from './TeamSection'
import ContactSection from './ContactSection'
export default function HomePage() {
  return (
    <div>
      <TopBar></TopBar>
      <Header></Header>
      <HeroSection></HeroSection>
      <FeaturedServicesSection></FeaturedServicesSection>
      <AboutUsSection></AboutUsSection>
       <ServicesSection></ServicesSection>
       <TestimonialSection></TestimonialSection>
       <TeamSection></TeamSection>
       <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </div>
  )
}
