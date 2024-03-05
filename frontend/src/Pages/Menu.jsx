import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import MenuDisplay from '../Components/MenuDisplay/MenuDisplay';



const Menu = () => {
  const {all_product}=useContext(ShopContext);
  const {menuId}= useParams();
  const menu=all_product.find((e)=> e.id === Number(menuId));
  return (
    <div>
<Breadcrumb menu={menu} />
<MenuDisplay menu={menu} />


    </div>
  )
}

export default Menu