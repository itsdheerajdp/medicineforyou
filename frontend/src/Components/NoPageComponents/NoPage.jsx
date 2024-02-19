import React from 'react'
import TopBar from "../HomePageComponents/TopBar";
import Header from '../HomePageComponents/Header';
import FooterSection from "../HomePageComponents/FooterSection";
export default function NoPage() {
  return (
    <div className='nopage'>
      <TopBar></TopBar>
      <Header></Header>
      <div className="nopage" style={{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>Invalid URL</h1>
      </div>
      <FooterSection></FooterSection>
    </div>
  )
}
