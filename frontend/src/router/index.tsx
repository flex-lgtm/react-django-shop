import { RouterProvider, createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import Login from '../pages/Auth/Login';
import SignUp from "../pages/Auth/SIgnUp";
import ProductRegister from "../pages/ProductRegister/ProductRegister";
import ColorRegister from "../pages/ColorRegister/ColorRegister";
import SizeRegister from "../pages/SizeRegister/SizeRegister";
import SeasonRegister from "../pages/SeasonRegister/SeasonRegister";
import BrandRegister from "../pages/BrandRegister/BrandRegister";
import ItemRegister from "../pages/ItemRegister/ItemRegister";
import MaterialRegister from "../pages/MaterialRegister/MaterialRegister";
import DeliveryRegister from "../pages/DeliveryRegister/DeliveryRegister";
import ChargerRegister from "../pages/ChargerRegister/ChargerRegister";
import DealerRegister from "../pages/DealerRegister/DealerRegister";
import ExhibitionRegister from "../pages/ExhibitionRegister/ExhibitionRegister";
import IncomingDepartmentRegister from "../pages/IncomingDepartmentRegister/IncomingDepartmentRegister";
import OriginCountryRegister from "../pages/OriginCountry/OriginCountryRegister";
import StorehouseRegister from "../pages/StorehouseRegister/StorehouseRegister";
import CustomerRegister from "../pages/CustomerRegister/CustomerRegister";
import DeposittypeRegister from "../pages/DeposittypeRegister/DeposittypeRegister";
import OrderSlip from "../pages/OrderSlip/OrderSlip";
import { AuthLayout } from "../layouts/AuthLayout";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";                    

export const Router = () => {
  return (
    <Routes>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="product_register" element={<ProductRegister />} />
        <Route path="color_register" element={<ColorRegister />} />
        <Route path="size_register" element={<SizeRegister />} />
        <Route path="season_register" element={<SeasonRegister />} />
        <Route path="brand_register" element={<BrandRegister />} />
        <Route path="material_register" element={<MaterialRegister />} />
        <Route path="size_register" element={<SizeRegister />} />      
        <Route path="delivery_register" element={<DeliveryRegister />} />   
        <Route path="origin_country_register" element={<OriginCountryRegister />} />
        <Route path="item_register" element={<ItemRegister />} />
        <Route path="incomingdepartment_register" element={<IncomingDepartmentRegister />} />
        <Route path="deposittype_register" element={<DeposittypeRegister/>}/>
        <Route path="storehouse_register" element={<StorehouseRegister />} />

      </Route>

    </Routes>
  )

}