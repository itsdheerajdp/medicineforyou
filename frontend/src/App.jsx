import './App.css'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './Components/HomePageComponents/HomePage'
import CareerPage from './Components/CareerPageComponents/CareerPage';
import StorePage from './Components/StorePageComponents/StorePage';
import NoPage from './Components/NoPageComponents/NoPage';
import AdminPage from './Components/AdminPageComponents/AdminPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import EditMedicinePage from './Components/AdminPageComponents/EditMedicinePage';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/api-admin-page-dheeraj-admin-page" element={<AdminPage />} />
          <Route path="/api-admin-page-edit-medicine-page/*" element={<EditMedicinePage/>} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
