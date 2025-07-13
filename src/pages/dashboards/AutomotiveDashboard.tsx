import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Car, 
  Fuel, 
  Navigation, 
  Shield, 
  Thermometer,
  Battery,
  MapPin,
  Clock,
  AlertTriangle,
  Settings
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts";

const tripData = [
  { time: "00:00", speed: 0, fuel: 85 },
  { time: "02:00", speed: 65, fuel: 82 },
  { time: "04:00", speed: 70, fuel: 78 },
  { time: "06:00", speed: 80, fuel: 74 },
  { time: "08:00", speed: 45, fuel: 72 },
  { time: "10:00", speed: 60, fuel: 68 },
  { time: "12:00", speed: 55, fuel: 65 },
];

const maintenanceAlerts = [
  { type: "Oil Change", dueDate: "In 2 weeks", status: "warning", icon: Settings },
  { type: "Tire Rotation", dueDate: "In 1 month", status: "info", icon: Car },
  { type: "Brake Inspection", dueDate: "Overdue", status: "error", icon: AlertTriangle },
];

const recentTrips = [
  { destination: "Downtown Office", distance: "12.5 km", duration: "23 min", fuel: "1.2L" },
  { destination: "Shopping Mall", distance: "8.3 km", duration: "18 min", fuel: "0.8L" },
  { destination: "Airport", distance: "45.2 km", duration: "52 min", fuel: "4.1L" },
  { destination: "Home Depot", distance: "6.7 km", duration: "15 min", fuel: "0.6L" },
];

export default function AutomotiveDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Automotive Dashboard</h1>
          <p className="text-muted-foreground">Monitor your vehicle's performance and status</p>
        </div>
        <Button>
          <Navigation className="mr-2 h-4 w-4" />
          Start Navigation
        </Button>
      </div>

      {/* Vehicle Status Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fuel Level</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">~420 km remaining</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Battery Health</CardTitle>
            <Battery className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">94%</div>
            <Progress value={94} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Excellent condition</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engine Temp</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89°C</div>
            <p className="text-xs text-green-600 mt-2">Normal operating range</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Speed</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 km/h</div>
            <p className="text-xs text-muted-foreground mt-2">Vehicle parked</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Today's Journey</CardTitle>
            <CardDescription>Speed and fuel consumption throughout the day</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={tripData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Area type="monotone" dataKey="speed" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="fuel" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Vehicle Location</CardTitle>
            <CardDescription>Current position and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Current Location</p>
                <p className="text-xs text-muted-foreground">123 Main Street, Downtown</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Engine Status</span>
                <Badge variant="default" className="bg-green-500">Running</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Doors</span>
                <Badge variant="outline">Locked</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>Alarm</span>
                <Badge variant="outline">Armed</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span>GPS</span>
                <Badge variant="default" className="bg-blue-500">Active</Badge>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Quick Actions</p>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline">Lock Car</Button>
                <Button size="sm" variant="outline">Start Engine</Button>
                <Button size="sm" variant="outline">Find Car</Button>
                <Button size="sm" variant="outline">Climate</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Alerts</CardTitle>
            <CardDescription>Upcoming and overdue maintenance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {maintenanceAlerts.map((alert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className={`p-2 rounded-full ${
                  alert.status === 'error' ? 'bg-red-100 text-red-600' :
                  alert.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <alert.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{alert.type}</p>
                  <p className="text-xs text-muted-foreground">{alert.dueDate}</p>
                </div>
                <Badge variant={alert.status === 'error' ? 'destructive' : alert.status === 'warning' ? 'secondary' : 'default'}>
                  {alert.status === 'error' ? 'Overdue' : alert.status === 'warning' ? 'Soon' : 'Scheduled'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Trips</CardTitle>
            <CardDescription>Your latest journeys and consumption</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTrips.map((trip, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{trip.destination}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center">
                      <Navigation className="h-3 w-3 mr-1" />
                      {trip.distance}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {trip.duration}
                    </span>
                    <span className="flex items-center">
                      <Fuel className="h-3 w-3 mr-1" />
                      {trip.fuel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}