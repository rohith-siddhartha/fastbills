import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "@fontsource/roboto-mono";

export function Footer(){

    const redTheme = createTheme({
        palette: {
          primary: {
            light: '#181717',
            main: '#181717',
            dark: '#060606',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });

    return (
        <div style={{marginTop:"auto", width:"100%", backgroundColor:"black", display:"flex", flexDirection:"column", alignItems:"center" }}>
            <div style={{width:"70%", marginLeft:"auto", marginRight:"auto", padding:"1%", display:"flex", flexDirection:"row", backgroundColor:"black"}}>
                <div style={{marginRight:"5%"}}>
                    <h1 style={{fontFamily:"Roboto Mono", fontWeight:"600", fontSize:"1.1em", color:"yellow"}}>Contact Us</h1>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Schedule a Demo</h3>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Report an Issue</h3>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Call Us</h3>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Mail Us</h3>
                </div>
                <div style={{marginRight:"5%"}}>
                    <h1 style={{fontFamily:"Roboto Mono", fontWeight:"600", fontSize:"1.1em", color:"yellow"}}>Follow Us</h1>
                    <div style={{cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}} >
                      <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white", marginRight:"10px"}}>Instagram </h3>
                      <InstagramIcon color='primary' />
                    </div>
                    <div style={{cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}} >
                      <h3 style={{fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white", marginRight:"10px"}}>Twitter </h3>
                      <TwitterIcon color='primary'/>
                    </div>
                    <div style={{cursor:"pointer", display:"flex", flexDirection:"row", alignItems:"center"}} >
                       <h3 style={{fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white", marginRight:"10px"}}>Youtube </h3>
                      <YouTubeIcon color='primary' />
                    </div>
                </div>
                <div style={{marginRight:"5%"}}>
                    <h1 style={{fontFamily:"Roboto Mono", fontWeight:"600", fontSize:"1.1em", color:"yellow"}}>Partner with us</h1>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Become a sales partner</h3>
                    <h3 style={{cursor:"pointer", fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"1em", color:"white"}}>Sales Guide</h3>
                </div>
            </div>
            <div style={{width:"70%"}}>
              <hr style={{width:"100%", color:"white"}}></hr>
              <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
                <CopyrightIcon color='primary' fontSize='small' />
                <h1 style={{fontFamily:"Roboto Mono", fontWeight:"500", fontSize:"0.8em", color:"white", marginLeft:"10px"}}>All rights reserved, FastBills, Inc</h1>
              </div>
            </div>
        </div>
    );
}