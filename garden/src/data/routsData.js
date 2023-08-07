import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Categories from "../pages/Categories/Categories";
import GeneralPage from "../pages/GeneralPage/GeneralPage";
import EachProduct from "../pages/EachProduct/EachProduct";
import Allproducts1 from "../pages/AllProducts/Allproducts1";
import AllSales1 from "../pages/AllSales/AllSales1";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";


export const pagesData = 

[
    {
        "id":1,
        "name": "Home",
        "path": "/",
        "element":Home,
    },
    {
        "id":2,
        "name": "Cateories",
        "path": "/categories",
        "element":Categories,
    },
    {
        "id":3,
        "name": "Cart",
        "path": "/cart",
        "element":Cart,
    },
    {
        "id":4,
        "name": "GeneralPage",
        "path": "/generalPage",
        "element":GeneralPage,
    },
    {
        "id":4,
        "name": "eachProduct",
        "path": "/eachProduct",
        "element":EachProduct,
    },
    {
        "id":4,
        "name": "AllProducts",
        "path": "/products/all",
        "element":Allproducts1,
    },
    {
        "id":4,
        "name": "AllSales",
        "path": "/sales/all",
        "element":AllSales1,
    },
    {
        "id":4,
        "name": "CategoryProducts",
        "path": "/categories/:id",
        "element": CategoryProducts,
    },
   
  
];