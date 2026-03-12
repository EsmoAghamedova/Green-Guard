import { BarChart3, TreePine, Users, TrendingUp, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", trees: 850 },
  { month: "Feb", trees: 920 },
  { month: "Mar", trees: 1100 },
];

const speciesData = [
  { name: "Oak", value: 3200, color: "#16a34a" },
  { name: "Maple", value: 2800, color: "#22c55e" },
  { name: "Pine", value: 2100, color: "#4ade80" },
  { name: "Birch", value: 1400, color: "#86efac" },
  { name: "Others", value: 747, color: "#bbf7d0" },
];

const impactOverTime = [
  { month: "Jan", co2: 17000, volunteers: 234 },
  { month: "Feb", co2: 18400, volunteers: 267 },
  { month: "Mar", co2: 22000, volunteers: 298 },
];

export function ImpactDashboard() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl mb-2 flex items-center gap-2 font-bold">
          <BarChart3 className="w-7 h-7 text-green-600" />
          Impact Dashboard
        </h1>
        <p className="text-gray-600 text-sm">
          Visualize our environmental impact
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <TreePine className="w-5 h-5 text-green-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-2xl font-semibold mb-0.5">10,247</div>
            <div className="text-xs text-gray-600 mb-2">Trees Planted</div>
            <Progress value={68} className="h-1.5" />
            <p className="text-[10px] text-gray-500 mt-1">68% of goal</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Leaf className="w-5 h-5 text-blue-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-semibold mb-0.5">205t</div>
            <div className="text-xs text-gray-600 mb-2">CO₂ Absorbed</div>
            <Progress value={45} className="h-1.5" />
            <p className="text-[10px] text-gray-500 mt-1">Lifetime</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-semibold mb-0.5">1,234</div>
            <div className="text-xs text-gray-600 mb-2">Volunteers</div>
            <Progress value={82} className="h-1.5" />
            <p className="text-[10px] text-gray-500 mt-1">+18% growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-yellow-600" />
              </div>
              <TrendingUp className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="text-2xl font-semibold mb-0.5">78</div>
            <div className="text-xs text-gray-600 mb-2">Hectares</div>
            <Progress value={55} className="h-1.5" />
            <p className="text-[10px] text-gray-500 mt-1">Protected</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Monthly Planting</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" style={{ fontSize: "12px" }} />
              <YAxis style={{ fontSize: "12px" }} />
              <Tooltip />
              <Bar dataKey="trees" fill="#16a34a" name="Trees" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Species Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={speciesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
                style={{ fontSize: "10px" }}
              >
                {speciesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Impact Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={impactOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" style={{ fontSize: "12px" }} />
              <YAxis yAxisId="left" style={{ fontSize: "10px" }} />
              <YAxis
                yAxisId="right"
                orientation="right"
                style={{ fontSize: "10px" }}
              />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="co2"
                stroke="#16a34a"
                strokeWidth={2}
                name="CO₂ (kg)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="volunteers"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Volunteers"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Progress Bars */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Regional Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span>Central Park North</span>
              <span className="text-green-600 font-semibold">35%</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span>Riverside Belt</span>
              <span className="text-green-600 font-semibold">43%</span>
            </div>
            <Progress value={43} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span>Community Garden</span>
              <span className="text-green-600 font-semibold">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span>Forest Edge</span>
              <span className="text-green-600 font-semibold">8%</span>
            </div>
            <Progress value={8} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Milestones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl">✅</div>
            <div className="flex-1">
              <p className="font-medium text-sm">5,000 Trees</p>
              <p className="text-xs text-gray-600">February 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">✅</div>
            <div className="flex-1">
              <p className="font-medium text-sm">10,000 Trees</p>
              <p className="text-xs text-gray-600">March 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">⏳</div>
            <div className="flex-1">
              <p className="font-medium text-sm">15,000 Trees Goal</p>
              <p className="text-xs text-gray-600 mb-2">4,753 to go</p>
              <Progress value={68} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}