import React from 'react'
import { Card } from "./ui/card";
import { Activity, CloudSun } from "lucide-react";

function DashboardQuickDeitails() {
  return (
    <div>
        <Card className="h-96 w-100 relative p-4">
            <div>
                <p className="m-2 text-sm text-gray-500">Berlin, sonnenallee</p>
                <p className="m-2 text-lg font-semibold">25°C</p>
                <p className="m-2 text-xs text-gray-400">Last sync: 10 min ago</p>
                    <CloudSun className="absolute top-4 right-6 w-6 h-6" color="gray"/> 
                    <p className="absolute top-10 right-6 text-sm text-gray-500 ">prety cloudy</p>
                <div className="bg-green-400 flex text-white      text-sm font-semibold w-24 ml-2 mt-24 rounded-lg">
                    <Activity className="m-1 w-8 h-8" />
                    <p className="text-l font-semibold">Active <br/> 3.02 kW</p> 
                </div>
                <div className=" flex text-sm font-semibold w-24 ml-2 mt-2">
                    <p className="text-l text-gray-400 ">max: 3.02kW
                        <br/> min: 0.02kW
                    </p>
                    </div>
            </div>
            <img src="../../public/assets/solar.svg" alt="solarr" className=" w-48 h-48 absolute top-14 right-6" />
        </Card>
  </div>
  )
}

export default DashboardQuickDeitails