import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
// import slide3 from './../../assets/slides/3.png';
import { ThemeProvider } from "@emotion/react";
import { blackTheme } from "../../util/themes";
import { slides } from "../../util/arrays";

export function Register() {

    const [details , setDetails] = useState({
        businessName:'',
        admin: {
            name:'',
            mobile:'',
            verified:false
        }
    });

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((slide+1)%slides.length);
        },3000);
        return () => clearInterval(interval);
    },[slide]);

    function updateBusinessName(param, value) {
        details.businessName=value;
        setDetails(details);
    }

    function updateAdminDetails(param, value) {
        details.admin[param]=value;
        setDetails(details);
    }

    return (
        <div className="flex flex-row py-2 px-10">
            <div className=" w-1/2 flex flex-col">

                <div className="w-2/3 mx-auto">
                    <h1 className="font-roboto text-xl font-bold my-4"> Sign Up </h1>
                    <h3 className="font-roboto font-bold text-sm">{"Organization's Name"} <span style={{color:"red"}}>*</span></h3>
                    <div className="w-full my-2">
                    <TextField sx={{fontSize:"6px"}} size="small" style={{width:"80%"}} defaultValue={details.businessName} id="outlined-controlled" placeholder="Enter Business's Name" onChange={(e)=>updateBusinessName(e.target.value)} />
                    </div>
                    <h3 className="font-roboto font-bold text-sm">{"Name"} <span style={{color:"red"}}>*</span></h3>
                    <div className="w-full my-2">
                    <TextField sx={{fontSize:"6px"}} size="small" style={{width:"80%"}} defaultValue={details.admin.businessName} id="outlined-controlled" placeholder="Enter Name" onChange={(e)=>updateAdminDetails("name",e.target.value)} />
                    </div>
                    <h3 className="font-roboto font-bold text-sm">{"Mobile Number"} <span style={{color:"red"}}>*</span></h3>
                    <div className="flex flex-row w-full my-2">
                        <TextField sx={{fontSize:"6px"}} size="small" style={{width:"60%"}} defaultValue={details.admin.businessName} id="outlined-controlled" placeholder="Enter Mobile" onChange={(e)=>updateAdminDetails("mobile",e.target.value)} />
                        <ThemeProvider theme={blackTheme}>
                            <Button className='cursor-pointer' size='small' style={{margin:"auto 8px", width:"10%", height:"30px",fontSize:"12px", fontFamily:"Roboto Mono", fontWeight:"500"}} variant="contained" color="primary" onClick={() => {navigator("/register")}}>
                                verify
                            </Button>
                        </ThemeProvider>
                    </div>
                    <div className="w-full my-6">
                        <ThemeProvider theme={blackTheme}>
                            <Button className='cursor-pointer' size='medium' style={{width:"80%", fontFamily:"Roboto Mono", fontWeight:"500"}} variant="contained" color="primary" onClick={() => {navigator("/register")}}>
                                Register
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>

            </div>
            <div className="border border-solid border-1">

            </div>
            <div className="w-1/2 flex flex-col">
                <div className="w-3/5 mx-auto my-2">
                    <img src={slides[slide].src}></img>
                </div>
                <div className="mx-auto my-2 bg-primary border border-solid border-1 border-primary-dark w-4/5 rounded-md">
                    <h1 className="font-roboto text-sm font-bold my-4 mx-10"><i> {slides[slide].quote} </i></h1>
                </div>
            </div>
        </div>
    );

}