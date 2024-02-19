import React, { useEffect, useState } from 'react'
import TopBar from '../HomePageComponents/TopBar'
import Header from '../HomePageComponents/Header'
import FooterSection from '../HomePageComponents/FooterSection'
import CallButton from '../Buttons/CallButton'
import { MdLocalOffer } from "react-icons/md";

import axios from "axios";
import "./StorePage.css"
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
  Icon,
} from 'semantic-ui-react'
export default function StorePage() {
  const [Medicines,setMedicines] = useState([]);
  useEffect(()=>{
    const fetchMedicines = async()=>{
      try {
        const medicines = await axios.get("https://medicineforyou-backend.vercel.app/v1/api/getmedicines");
        // console.log("Medicines got:",medicines.data.data);
        setMedicines(medicines.data.data)
      } catch (error) {
        console.log("Error:",error)
      }
    }
    fetchMedicines();
  },[])
  if(Medicines.length===0){
    return <div>
      <TopBar></TopBar>
      <Header></Header>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}><h1>   No medicines available in the store... Please wait...
</h1></div>
      <FooterSection></FooterSection>
    </div>
  }
  return (
    <div className='storepage'>
      <TopBar></TopBar>
      <Header></Header>
      <CardGroup className='storecard' >
      {
        Medicines.map((medicine)=>(
    <Card key={medicine._id} className='medicinecard'>
    <div className="imagemedicine"><img src={medicine.image} className='medicinecardimage' /></div>
    <CardContent>
      <CardHeader>{medicine.name}</CardHeader>
      <CardMeta style={{marginTop:"1rem"}}>
        <span className='date'>{medicine.description}</span>
      </CardMeta>
      <CardContent style={{marginTop:"1rem"}}>
      <MdLocalOffer />
 {medicine.offer}%
      </CardContent>
      <br />
      <CardHeader className="cardPrice" style={{marginTop:"3rem"}}>
      <span className='priceSpan'>Price</span> ₹{medicine.price}
      </CardHeader>
    </CardContent>
    <CardContent extra>
      <a>
       
        <CallButton></CallButton>
      </a>
    </CardContent>
  </Card>
        ))
      }
      

  </CardGroup>
      <FooterSection></FooterSection>
    </div>
  )
}
