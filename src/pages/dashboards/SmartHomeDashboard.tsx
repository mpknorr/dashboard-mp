import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Home, 
  Thermometer, 
  Lightbulb, 
  Camera, 
  Shield, 
  Zap,
  Droplets,
  Wind,
  Wifi,
  Battery
} from "lucide-react";

const devices = [
  { name: "Living Room Lights", type: "Light", status: true, consumption: "12W", room: "Living Room" },
  { name: "Bedroom AC", type: "Climate", status: false, consumption: "800W", room: "Bedroom" },
  { name: "Kitchen Camera", type: "Security", status: true, consumption: "5W", room: "Kitchen" },
  { name: "Front Door Lock", type: "Security", status: true, consumption: "2W", room: "Entrance" },
  { name: "Garden Sprinkler", type: "Water", status: false, consumption: "45W", room: "Garden" },
];

const rooms = [
  { name: "Living Room", temperature: 22, humidity: 45, lights: 3, devices: 8 },
  { name: "Bedroom", temperature: 20, humidity: 40, lights: 2, devices: 5 },
  { name: "Kitchen", temperature: 24, humidity: 55, lights: 4, devices: 6 },
  { name: "Bathroom", temperature: 23, humidity: 60, lights: 2, devices: 3 },
];

export default function SmartHomeDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smart Home</h1>
          <p className="text-muted-foreground">Control and monitor your smart home devices</p>
        </div>
        <Button>
          <Home className="mr-2 h-4 w-4" />
          Add Device
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">out of 25 devices</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Usage</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 kW</div>
            <p className="text-xs text-green-600">-15% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22°C</div>
            <p className="text-xs text-muted-foreground">Optimal comfort level</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Secure</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Rooms and Device Control */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Room Control</CardTitle>
            <CardDescription>Monitor and control each room</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rooms.map((room, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{room.name}</h3>
                  <Badge variant="outline">{room.devices} devices</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span>{room.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span>{room.humidity}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>{room.lights} lights on</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-green-500" />
                    <span>Connected</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Temperature</span>
                    <span>{room.temperature}°C</span>
                  </div>
                  <Slider
                    value={[room.temperature]}
                    max={30}
                    min={15}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Status</CardTitle>
            <CardDescription>Control your smart devices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    device.type === 'Light' ? 'bg-yellow-100 text-yellow-600' :
                    device.type === 'Climate' ? 'bg-blue-100 text-blue-600' :
                    device.type === 'Security' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {device.type === 'Light' && <Lightbulb className="h-4 w-4" />}
                    {device.type === 'Climate' && <Wind className="h-4 w-4" />}
                    {device.type === 'Security' && <Shield className="h-4 w-4" />}
                    {device.type === 'Water' && <Droplets className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{device.name}</p>
                    <p className="text-xs text-muted-foreground">{device.room} • {device.consumption}</p>
                  </div>
                </div>
                <Switch checked={device.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Energy Consumption */}
      <Card>
        <CardHeader>
          <CardTitle>Energy Consumption</CardTitle>
          <CardDescription>Monitor your home's energy usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <p className="text-sm text-muted-foreground">Energy Efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$127</div>
              <p className="text-sm text-muted-foreground">This Month's Bill</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2.4 kWh</div>
              <p className="text-sm text-muted-foreground">Peak Usage Today</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}