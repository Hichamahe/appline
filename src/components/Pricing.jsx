import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { Switch } from 'antd';
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";


function Pricing() {
    const { isDay } = useTheme();

    const PricingMounth = [
    {title:'Free', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$0",
    category:{
        1:"60-day chat history",
        2:"15 GB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    },
    {title:'Unlimited', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$35",
    category:{
        1:"60-day chat history",
        2:"35 GB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    },
    {title:'Business', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$50",
    category:{
        1:"120-day chat history",
        2:"1 TB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    }
];

    const PricingYear = [
    {title:'Free', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$0",
    category:{
        1:"60-day chat history",
        2:"15 GB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    },
    {title:'Unlimited', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$350",
    category:{
        1:"1 year chat history",
        2:"1 TB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    },
    {title:'Business', 
    descreption:"Lorem Ipsum is simply dummythe.", 
    price:"$500",
    category:{
        1:"1-year chat history",
        2:"3 TB cloud storage",
        3:"24/7 Support",
        4:"Custom Branding Strategy"
    }
    }
];
    
    const [pricingPlan, setPricingPlan] = useState("monthly");
    const [newPlan, setNewPlan] = useState(null);

    const handlePlanChange = checked => {
        setNewPlan(checked ? 'monthly' : 'yearly');
        setTimeout(() => {
            setPricingPlan(checked ? 'monthly' : 'yearly');
            setNewPlan(null);
        }, 500);
    };

    const currentPlans = pricingPlan === 'monthly' ? PricingMounth : PricingYear;

    return (
        <motion.div initial = {{opacity: 0, y:50}}
                whileInView ={{opacity: 1, y:0}}
                transition= {{ duration: 1 }} 
                className="p-10">
            <div className="space-y-5 flex flex-col items-center">
                <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-3xl`}>Choose Your Plan</h1>
                <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
            </div>
            <div className="space-y-5">
                <div className="flex justify-center p-5 space-x-3 relative group dis">
                    <span className={`${isDay ? 'text-dark' : 'text-white'}`}>Yearly</span>
                    <Switch
                        onChange={handlePlanChange}
                        className={`${pricingPlan === 'monthly' ? 'bg-primary' : 'bg-primary'}`}
                    />
                    <span className={`${isDay ? 'text-dark' : 'text-white'}`}>Mounthly</span>
                </div>
                <div className={`grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 place-items-center`}>
                    {currentPlans.map((item, index) => (
                        <div
                            className={`${isDay ? 'bg-light' : 'bg-dark'} space-y-4 shadow-lg rounded-md p-3 w-full`}
                            key={index}
                        >
                          <div className={`space-y-5 border-b-2`}>
                            <div className="flex justify-between">
                            <h1 className={`${isDay ? 'text-dark' : 'text-white'} text-2xl font-bold`}>{item.title}</h1>
                            {item.title === "Unlimited" ? <a className="text-primary underline text-sm font-medium cursor-pointer">Most Popular</a> : ""}
                            </div>
                          <div className={`transition-opacity ${newPlan ? 'duration-2000 ease-in-out' : ''}`}
                          style={{ opacity: newPlan ? '0' : '1' }}>  
                            <p className="text-gray-500 w-2/3">{item.descreption}</p>
                            <p className={`${isDay ? 'text-dark' : 'text-white'} font-bold text-2xl`}>{item.price}<span className="font-normal text-sm text-gray-500 ml-3">{`/${pricingPlan === 'monthly' ? 'month' : 'year'}`}</span></p>
                          </div>  
                          </div>
                          <div className="space-y-4 font"
                          style={{ opacity: newPlan ? '0' : '1' }}
                          >  
                            <p className="flex"><FaCheck className="text-green-600 m-1"/><span className={`${isDay ? 'text-dark' : 'text-white'}`}>{item.category[1]}</span></p>
                            <p className="flex"><FaCheck className="text-green-600 m-1"/><span className={`${isDay ? 'text-dark' : 'text-white'}`}>{item.category[2]}</span></p>
                            <p className="flex"><FaCheck className="text-green-600 m-1"/><span className={`${isDay ? 'text-dark' : 'text-white'}`}>{item.category[3]}</span></p>
                            <p className="flex"><FaCheck className="text-green-600 m-1"/><span className={`${isDay ? 'text-dark' : 'text-white'}`}>{item.category[4]}</span></p>
                          </div>  
                            <div className="relative group">
                            <button className= {`${item.title === 'Unlimited' ? 'bg-primary group-hover:opacity-90' : 'bg-dark'} ${ isDay && item.title != 'Unlimited' ? 'bg-dark' : 'bg-secondDark'} rounded-md p-2 w-full text-white group-hover:bg-primary`}>Chose Plan</button>
                            </div>
                          
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Pricing;
