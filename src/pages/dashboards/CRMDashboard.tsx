import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  DollarSign, 
  Target, 
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Star
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const salesData = [
  { month: "Jan", leads: 240, closed: 80, revenue: 32000 },
  { month: "Feb", leads: 300, closed: 120, revenue: 48000 },
  { month: "Mar", leads: 280, closed: 95, revenue: 38000 },
  { month: "Apr", leads: 350, closed: 140, revenue: 56000 },
  { month: "May", leads: 400, closed: 160, revenue: 64000 },
  { month: "Jun", leads: 380, closed: 150, revenue: 60000 },
];

const topDeals = [
  { company: "Spotify", amount: "$2,500", probability: 95, contact: "Daniel Walker", status: "Negotiation" },
  { company: "Amazon", amount: "$5,000", probability: 80, contact: "Mark Wilson", status: "Proposal" },
  { company: "Adobe", amount: "$1,400", probability: 60, contact: "Sarah Connor", status: "Discovery" },
  { company: "Invision", amount: "$4,100", probability: 90, contact: "Jessica Jones", status: "Closing" },
];

const salesTeam = [
  { name: "Esthera Jackson", deals: 12, revenue: "$2,400", avatar: "/avatars/01.png", trend: "+12%" },
  { name: "Alexa Liras", deals: 8, revenue: "$1,800", avatar: "/avatars/02.png", trend: "+8%" },
  { name: "Laurent Perrier", deals: 15, revenue: "$3,200", avatar: "/avatars/03.png", trend: "+15%" },
  { name: "Michael Levi", deals: 6, revenue: "$1,200", avatar: "/avatars/04.png", trend: "-3%" },
];

const leadSources = [
  { name: "Website", value: 35, color: "#3B82F6" },
  { name: "Social Media", value: 25, color: "#10B981" },
  { name: "Email", value: 20, color: "#F59E0B" },
  { name: "Referral", value: 20, color: "#EF4444" },
];

export default function CRMDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CRM Dashboard</h1>
          <p className="text-muted-foreground">Track your sales performance and customer relationships</p>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,300</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.5%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +2.3% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Closed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$298,000</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>Leads vs Closed Deals over time</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="leads" fill="#3B82F6" />
                <Bar dataKey="closed" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {leadSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {leadSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: source.color }}></div>
                    <span className="text-sm">{source.name}</span>
                  </div>
                  <span className="text-sm font-medium">{source.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Deals</CardTitle>
            <CardDescription>Deals in the pipeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topDeals.map((deal, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{deal.company}</span>
                    <span className="text-lg font-bold text-green-600">{deal.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{deal.contact}</span>
                    <Badge variant="outline">{deal.status}</Badge>
                  </div>
                  <div className="mt-2">
                    <Progress value={deal.probability} className="h-2" />
                    <span className="text-xs text-muted-foreground">{deal.probability}% probability</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Team Performance</CardTitle>
            <CardDescription>Top performers this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {salesTeam.map((member, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.deals} deals closed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{member.revenue}</p>
                  <p className={`text-xs ${member.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {member.trend}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}