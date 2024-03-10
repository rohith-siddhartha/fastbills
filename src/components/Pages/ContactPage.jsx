import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallIcon from '@mui/icons-material/Call';
import { FAQs } from "../../util/arrays";

export function ContactPage() {

    return (
        <div className="flex flex-row py-2 px-10">
            <div className=" w-1/2 flex flex-col px-10">

                <h1 className="font-roboto text-md underline decoration-primary font-bold my-4"> Frequently Asked Questions </h1>

                {
                    FAQs.map((faq, index) => {
                        return <FAQ key={index} faq={faq} />
                    })
                }

            </div>
            <div className="border border-solid border-1">

            </div>
            <div className="w-1/2 flex flex-col px-10">
            <h1 className="font-roboto text-md underline decoration-primary font-bold my-4"> Have other questions? </h1>
            <div>
                <h3 className="font-roboto my-4"> <CallIcon /> +91 9182867891</h3>
                <h3 className="font-roboto my-4"> <MailIcon /> udandrarohith@gmail.com</h3>
            </div>
            </div>
        </div>
    );

}

function FAQ({faq}) {

    const [open, setOpen] = useState(false);

    function getDisplay(){
        return open?'block':'none';
    }

    return (
        <div className="flex flex-col w-full bg-white my-2 pb-2 border-b border-solid border-1 border-primary-dark">
            <div className="flex flex-row mx-2 my-1" onClick={() => setOpen(!open)}>
                <h3 className="font-roboto text-sm font-bold mr-auto"> {faq.question} </h3>
                { open && <KeyboardArrowUpIcon/> } { !open && <KeyboardArrowDownIcon/> }
            </div>
            {/* <hr className=" w-0.9 h-0.5 mx-2 bg-black"></hr> */}
            <div style={{display:getDisplay()}} className="my-1 mx-4">
                <h3 className="font-roboto text-xsm mr-auto"> {faq.answer} </h3>
            </div>
        </div>
    );

}