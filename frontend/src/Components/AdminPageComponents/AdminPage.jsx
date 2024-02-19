import React from "react";
import TopBar from "../HomePageComponents/TopBar";
import Header from "../HomePageComponents/Header";
import FooterSection from "../HomePageComponents/FooterSection";
import { FormField, Button, Form } from 'semantic-ui-react'
import axios from "axios";
import { useState } from "react";
import "./AdminPage.css"
const AdminPage = () => {
const [medicineName, setMedicineName] = useState('');
const [medicineDescription, setMedicineDescription] = useState('');
const [offer, setOffer] = useState('');
const [medicinePrice, setMedicinePrice] = useState('');
const [medicineImage, setMedicineImage] = useState(null);
const [adminCode, setAdminCode] = useState('');

const formSubmitHandler = async(e) => {
  console.log("I am in submit")
  e.preventDefault();
  try {
  console.log("I am in try")
  const formData = new FormData();
  formData.append('name', medicineName);
  console.log("Medicine Name is:",medicineName);
  formData.append('description', medicineDescription);
  formData.append('offer', offer);
  formData.append('price', medicinePrice);
  formData.append('image', medicineImage);
  formData.append('otp', adminCode);
  console.log("Medicine Image is:",medicineImage)
  console.log("Form admincode is:",adminCode)
  console.log("Form Data is:",formData)
  const response = await axios.post('https://medicineforyou-backend.vercel.app/v1/api/uploadmedicine',formData);
  console.log("Medicine Got:",response);
  alert('Medicine Added Successfully!!');
  location.reload();
  } catch (error) {
    // alert('Something Went Wrong During Uploading Medicine!! ');
    console.log("Error is:",error.response.data.message);
    alert(error.response.data.message);
    // alert("Kindly Provide all the informations and Correct Admin Code to Add Medicine in Store!!")
    location.reload();
  }
  
}
  return (
       <div className="adminpage">
        <TopBar/>
        <Header></Header>
  <Form className="adminform">
    <FormField className="adminformfield">
      <label>Medicine Name</label>
      <input placeholder='Enter Medicine Name' required value={medicineName}  onChange={(e)=>setMedicineName(e.target.value)}/>
    </FormField>
    <FormField className="adminformfield">
      <label>Medicine Description</label>
      <input placeholder='Enter Medicine Description' value={medicineDescription} onChange={(e)=>setMedicineDescription(e.target.value)} />
    </FormField>
    <FormField className="adminformfield">
      <label>Offer Applied ( in percentage)</label>
      <input placeholder='Enter The Offer given in Medicine' value={offer} onChange={(e)=>setOffer(e.target.value)} />
    </FormField>
    <FormField className="adminformfield">
      <label>Medicine Price</label>
      <input placeholder='Enter Medicine Price After Applying Offer' value={medicinePrice} onChange={(e)=>setMedicinePrice(e.target.value)} />
    </FormField>
    <FormField className="adminformfield">
      <label>Medicine Image</label>
      <input type="file" accept="image/*" onChange={(e)=>{setMedicineImage(e.target.files[0])}}/>
    </FormField>
    <FormField className="adminformfield">
      <label>Admin Code</label>
      <input placeholder='Enter 4 digit Admin Code to Add Medicine in Store' value={adminCode} onChange={(e)=>setAdminCode(e.target.value)}/>
    </FormField>
    <Button className="adminformfield" type='submit' onClick={formSubmitHandler} >Add Medicine in Store</Button>
  </Form>

         <FooterSection></FooterSection>
        
       </div>
    
  );
};

export default AdminPage;