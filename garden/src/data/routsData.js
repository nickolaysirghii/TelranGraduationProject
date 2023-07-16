import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import Cart from "../pages/Cart/Cart";
import Categories from "../pages/Categories/Categories";
import EachProduct from "../pages/EachProduct/EachProduct";
import ProductSales from "../pages/ProductsSales/ProductSales";
import Tools from "../pages/ToolsAndEquipment/Tools";


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
        "name": "All Products",
        "path": "/allProducts",
        "element":AllProducts,
    },
    {
        "id":3,
        "name": "Cateories",
        "path": "/categories",
        "element":Categories,
    },
    {
        "id":4,
        "name": "Product sales",
        "path": "/productSales",
        "element":ProductSales,
    },
    {
        "id":5,
        "name": "Tools and equipment",
        "path": "/ToolsAndEquipment",
        "element":Tools,
    },
    {
        "id":6,
        "name": "Each product",
        "path": "/product",
        "element":EachProduct,
    },
    {
        "id":7,
        "name": "Cart",
        "path": "/cart",
        "element":Cart,
    }
];