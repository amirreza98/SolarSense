import React from 'react'
import { Card } from "./ui/card";
import { Activity, CloudSun } from "lucide-react";
import { CardContent } from "./ui/card";

function DasboardGridInfo() {
  return (
    <div>
      <Card className="h-96 col-span-1">
        <CardContent>
          <img src="/solar-room.jpg" alt="panel" className="rounded-xl mb-2" />
          <p className="font-semibold">CMOS Solar Panel</p>
          <p className="text-sm text-gray-500">Peak Power: 6.8 kWp</p>
          <p className="text-sm text-gray-500">Installed: 10/01/2018</p>
          <p className="text-sm text-gray-500">Address: 12 Baker St, London</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default DasboardGridInfo