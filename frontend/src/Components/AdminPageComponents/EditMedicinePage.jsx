import React ,{useState,useEffect} from 'react'
import TopBar from '../HomePageComponents/TopBar'
import Header from '../HomePageComponents/Header'
import FooterSection from '../HomePageComponents/FooterSection'
import { MdLocalOffer } from "react-icons/md";
import "./AdminPage.css"
import axios from 'axios';

import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardContent,
  Card,
  Form,
  FormField,
  Button,
  Image,
} from 'semantic-ui-react'
export default function EditMedicinePage() {
  const [Medicines,setMedicines] = useState([]);
  const [adminCode, setAdminCode] = useState('');
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
  const DeleteHandler = async(currentMedicine)=>{
    try {
       const response= await axios.post(`https://medicineforyou-backend.vercel.app/v1/api/deletemedicine/${currentMedicine._id}`,{adminCode:adminCode});
      // console.log("Response Got:",response.data);
      // console.log("I am in try of delete and medicines got:",currentMedicine);
      alert("Medicine Deleted Successfully!!")
      location.reload();
    } catch (error) {
      alert(error.response.data.message)
      location.reload();
      console.log("I am in catch of delete with error:",error.response.data.message)
    }
  }
  if(Medicines.length===0){
    return <div>
      <TopBar></TopBar>
      <Header></Header>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}><h1>   Kindly Add Some Medicines which are available....</h1></div>
      <FooterSection></FooterSection>
    </div>
  }
  return (
    <div>
      <TopBar></TopBar>
      <Header></Header>
      <CardGroup className='storecard' >
      {
        Medicines.map((medicine)=>(
    <Card key={medicine._id} className='medicinecard' style={{height:"35rem"}}>
    <div className="imagemedicine"><img src={medicine.image} className='medicinecardimage' wrapped ui={false} /></div>
    <CardContent>
      <CardHeader>{medicine.name}</CardHeader>
      <CardMeta>
        <span className='date'>{medicine.description}</span>
      </CardMeta>
      <CardContent>
      <MdLocalOffer />
 {medicine.offer}%
      </CardContent>
      <br />
      <CardHeader className="cardPrice" style={{marginTop:"2rem"}}>
      <span className='priceSpan'>Price</span> ₹{medicine.price}
      </CardHeader>
    </CardContent>
    <CardContent extra>
      <Form>
        <FormField>
          <input type="text"  placeholder='Enter 4 digit Admin Code' onChange={(e)=>setAdminCode(e.target.value)}/>
        </FormField>
        <Button fluid negative onClick={()=>DeleteHandler(medicine)}>Delete From Store</Button>
      </Form>
    </CardContent>
  </Card>
        ))
      }
      

  </CardGroup>
      <FooterSection></FooterSection>
    </div>
  )
}
