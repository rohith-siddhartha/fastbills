import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout(){
    return (
        <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column"}}>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
}