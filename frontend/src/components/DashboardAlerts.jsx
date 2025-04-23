import React from 'react'
import { Card, CardContent} from "./ui/card";
import { Activity, CloudSun } from "lucide-react";
import { Bell } from "lucide-react";

function DashboardAlerts() {
  return (
    <div>
        <Card className="h-96 col-span-1">
        <CardContent className="space-y-2">
            <p className="font-semibold flex items-center"><Bell className="w-4 h-4 mr-2" /> Alerts (3)</p>
            <ul className="text-sm text-gray-600">
            <li>⚠️ Low Efficiency Detected - 20/11 14:05</li>
            <li>🔋 Battery Charge Low - 19/11 09:54</li>
            <li>✅ Battery Full - 18/11 16:42</li>
            </ul>
        </CardContent>
        </Card>
    </div>
  )
}

export default DashboardAlerts