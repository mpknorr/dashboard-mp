import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Headphones, 
  Play, 
  Users, 
  Clock,
  Eye,
  Gamepad2,
  Zap,
  Wifi,
  Settings,
  Trophy
} from "lucide-react";

const vr_sessions = [
  { game: "Beat Saber", duration: "45 min", score: 98.5, difficulty: "Expert", calories: 120 },
  { game: "Half-Life: Alyx", duration: "2h 15min", progress: 75, level: "Chapter 8", calories: 180 },
  { game: "Superhot VR", duration: "30 min", score: 87.2, difficulty: "Hard", calories: 95 },
  { game: "The Lab", duration: "1h 05min", progress: 60, level: "Archery", calories: 85 },
];

const hardware_status = [
  { component: "Headset", status: "Connected", battery: 85, temperature: 32 },
  { component: "Controller L", status: "Connected", battery: 92, temperature: 28 },
  { component: "Controller R", status: "Connected", battery: 88, temperature: 29 },
  { component: "Base Station 1", status: "Tracking", battery: null, temperature: 35 },
  { component: "Base Station 2", status: "Tracking", battery: null, temperature: 34 },
];

const achievements = [
  { title: "VR Marathon", description: "Play for 10 hours in a week", progress: 73 },
  { title: "Precision Master", description: "Score 95%+ in rhythm games", progress: 100 },
  { title: "Explorer", description: "Try 15 different VR experiences", progress: 60 },
  { title: "Fitness Guru", description: "Burn 500 calories in VR", progress: 84 },
];

export default function VRDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">VR Dashboard</h1>
          <p className="text-muted-foreground">Monitor your virtual reality experience and performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Calibrate
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Start VR
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Session Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 35m</div>
            <p className="text-xs text-green-600">+25% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">480</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Games Played</CardTitle>
            <Gamepad2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-blue-600">3 new this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-green-600">2 unlocked today</p>
          </CardContent>
        </Card>
      </div>

      {/* Hardware Status */}
      <Card>
        <CardHeader>
          <CardTitle>Hardware Status</CardTitle>
          <CardDescription>Monitor your VR equipment in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {hardware_status.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-sm">{item.component}</h3>
                  <Badge variant={item.status === 'Connected' || item.status === 'Tracking' ? 'default' : 'secondary'}>
                    {item.status}
                  </Badge>
                </div>
                
                {item.battery && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Battery</span>
                      <span>{item.battery}%</span>
                    </div>
                    <Progress value={item.battery} className="h-1" />
                  </div>
                )}
                
                <div className="flex justify-between text-xs">
                  <span>Temperature</span>
                  <span className={item.temperature > 40 ? 'text-red-600' : 'text-green-600'}>
                    {item.temperature}°C
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Sessions and Achievements */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Your latest VR gaming sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {vr_sessions.map((session, index) => (
              <div key={index} className="p-3 border rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{session.game}</h3>
                  <Badge variant="outline">{session.duration}</Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  {session.score && (
                    <div>
                      <span className="font-medium">Score: </span>
                      <span className="text-green-600">{session.score}%</span>
                    </div>
                  )}
                  {session.progress && (
                    <div>
                      <span className="font-medium">Progress: </span>
                      <span>{session.progress}%</span>
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Calories: </span>
                    <span>{session.calories}</span>
                  </div>
                </div>
                
                {session.progress && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{session.level}</span>
                      <span>{session.progress}%</span>
                    </div>
                    <Progress value={session.progress} className="h-1" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Track your VR gaming milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-sm">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.progress === 100 && (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <Progress 
                    value={achievement.progress} 
                    className={`h-2 ${achievement.progress === 100 ? 'bg-yellow-100' : ''}`}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* VR Workspace */}
      <Card>
        <CardHeader>
          <CardTitle>Virtual Workspace</CardTitle>
          <CardDescription>Configure your VR environment settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <Eye className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-medium">IPD Setting</h3>
              <p className="text-2xl font-bold">63.5mm</p>
              <p className="text-xs text-muted-foreground">Optimal for your eyes</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Headphones className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <h3 className="font-medium">Audio Level</h3>
              <p className="text-2xl font-bold">75%</p>
              <p className="text-xs text-muted-foreground">Comfortable volume</p>
            </div>
            
            <div className="text-center p-4 border rounded-lg">
              <Wifi className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <h3 className="font-medium">Tracking Quality</h3>
              <p className="text-2xl font-bold text-green-600">Excellent</p>
              <p className="text-xs text-muted-foreground">All sensors active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}