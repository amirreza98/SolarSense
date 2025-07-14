import React from 'react'
import { Card, CardContent } from "./ui/card";
import { Activity, CloudSun } from "lucide-react";

function DashboardPowerFlow() {
  return (
    <div>
        <Card className="h-96 w-100 relative p-4">
            <CardContent className="space-y-2">
                <div>
                    <p className="font-semibold flex items-center">Power Flow</p>

                <img src="../../public/assets/PowerFlow2.jpg" alt="solarr" className="h-5/6 absolute mix-blend-multiply" />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardPowerFlow