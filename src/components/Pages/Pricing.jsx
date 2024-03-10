import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddchartIcon from '@mui/icons-material/Addchart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export function Pricing() {
    return (
        <div className="flex flex-col py-2 px-10 mx-auto">
            <div className=" w-full flex flex-col px-10">

                <h1 className="font-roboto text-xl underline decoration-primary font-bold mx-auto my-2">
                    Our Plans and Pricing
                </h1>

                <h3 className="font-roboto text-sm font-bold mx-auto my-2">
                    We only offer a single pricing plan in which we charge per layout
                </h3>

            </div>
            <div className="flex flex-row border border-solid border-1 border-primary-dark bg-primary rounded-md my-8">

                <div className="w-1/2 flex flex-col p-6 my-auto border-r border-solid border-1 border-primary-dark">
                    <h1 className='text-xtl font-roboto font-bold mx-0 px-0 my-0 py-0'> <CurrencyRupeeIcon sx={{fontSize:"70px"}} />1000 </h1>
                    <h3 className="font-roboto text-sm bg-primary-dark font-bold mx-auto my-0 px-2">
                        per layout & per year
                    </h3>
                </div>

                <div className='my-2 mb-4 px-4'>
                    <h3 className="w-40 font-roboto text-md bg-primary-dark font-bold mr-auto my-4 px-2">
                        Features
                    </h3>
                    <div className='ml-4'>
                        <h3 className="font-roboto text-sm font-bold mx-auto my-2 px-2">
                            <MenuBookIcon /> QR Menu
                        </h3>
                        <h3 className="font-roboto text-sm font-bold mx-auto my-2 px-2">
                            <WarehouseIcon /> store organization
                        </h3>
                        <h3 className="font-roboto text-sm font-bold mx-auto my-2 px-2">
                            <CategoryIcon /> Inventory Management
                        </h3>
                        <h3 className="font-roboto text-sm font-bold mx-auto my-2 px-2">
                            <AddchartIcon /> Analytics
                        </h3>
                        <h3 className="font-roboto text-sm font-bold mx-auto my-2 px-2">
                            <HeadsetMicIcon /> 24/7 customer support
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
}