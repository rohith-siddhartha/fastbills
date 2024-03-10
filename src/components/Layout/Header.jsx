import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo from './../../assets/logo.png';
import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import "@fontsource/roboto-mono";
import { useNavigate } from 'react-router-dom';
import { blackTheme } from '../../util/themes';

export function Header() {

    const navigate = useNavigate();
    
    function navigator(term){
      navigate(term);
    }

    const pageItemStyle = 'cursor-pointer p-4 font-roboto font-semibold';

    return (
        <div className='flex flex-row px-10 py-2 justify-center'>
            <div className='w-1/5 h-12'>
                <img src={logo} className='cursor-pointer object-contain h-full'></img>
            </div>
            <div className='flex flex-row justify-center w-1/2'>
                <h3 className={pageItemStyle} onClick={() => {navigator("/product")}} >Product</h3>
                <h3 className={pageItemStyle} onClick={() => {navigator("/pricing")}} >Pricing</h3>
                <h3 className={pageItemStyle} onClick={() => {navigator("/about")}} >About</h3>
                <h3 className={pageItemStyle} onClick={() => {navigator("/contact-us")}} >Contact us</h3>
            </div>
            <div className='flex flex-row justify-center px-auto py-4'>
                <ThemeProvider theme={blackTheme}>
                    <Button className='cursor-pointer' variant="outlined" size='small' style={{fontFamily:"Roboto Mono", fontWeight:"600"}} endIcon={<ArrowOutwardIcon />} href='https://google.com'>
                        Platform
                    </Button>
                </ThemeProvider>

                <ThemeProvider theme={blackTheme}>
                    <Button className='cursor-pointer' size='small' style={{marginLeft:"20px", fontFamily:"Roboto Mono", fontWeight:"500"}} variant="contained" color="primary" onClick={() => {navigator("/register")}}>
                        Register
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );

}