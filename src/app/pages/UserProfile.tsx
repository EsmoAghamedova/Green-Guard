import { Link } from "react-router";
import { TreePine, Award, Calendar, MapPin, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

const userStats = {
  name: "Alex Green",
  joinDate: "January 2026",
  treesPlanted: 47,
  reportsSubmitted: 3,
  achievements: [
    { id: 1, name: "First Tree", icon: "🌱", earned: true },
    { id: 2, name: "10 Trees Club", icon: "🌳", earned: true },
    { id: 3, name: "Community Guardian", icon: "🛡️", earned: true },
    { id: 4, name: "50 Trees Milestone", icon: "🏆", earned: false },
    { id: 5, name: "Climate Champion", icon: "🌍", earned: false },
  ],
  recentActivity: [
    {
      id: 1,
      type: "plant",
      count: 5,
      species: "Red Maple",
      location: "Central Park North",
      date: "March 10, 2026",
    },
    {
      id: 2,
      type: "report",
      location: "Forest Edge",
      date: "March 8, 2026",
    },
    {
      id: 3,
      type: "plant",
      count: 3,
      species: "White Oak",
      location: "Riverside Green Belt",
      date: "March 5, 2026",
    },
  ],
};

export function UserProfile() {
  return (
    <div className="p-4">
      {/* Profile Header */}
      <Card className="mb-4">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 mb-3">
              <AvatarFallback className="bg-green-600 text-white text-2xl">
                {userStats.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl mb-2 font-bold">{userStats.name}</h1>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                <Calendar className="w-3 h-3" />
                {userStats.joinDate}
              </Badge>
              <Badge className="bg-green-600 flex items-center gap-1 text-xs">
                <TreePine className="w-3 h-3" />
                Active Planter
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-3xl font-semibold text-green-600">
                  {userStats.treesPlanted}
                </div>
                <div className="text-xs text-gray-600">Trees Planted</div>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <div className="text-3xl font-semibold text-red-600">
                  {userStats.reportsSubmitted}
                </div>
                <div className="text-xs text-gray-600">Reports</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Award className="w-5 h-5 text-yellow-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {userStats.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex flex-col items-center p-3 rounded-lg border-2 ${
                  achievement.earned
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-gray-200 bg-gray-50 opacity-50"
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <div className="text-[10px] text-center font-medium leading-tight">
                  {achievement.name}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Environmental Impact */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Your Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-green-600 mb-0.5">~940 kg</div>
              <div className="text-xs text-gray-600">CO₂ to be absorbed</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-blue-600 mb-0.5">47</div>
              <div className="text-xs text-gray-600">Wildlife habitats created</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-purple-600 mb-0.5">Top 15%</div>
              <div className="text-xs text-gray-600">Community ranking</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {userStats.recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-200"
              >
                <div
                  className={`p-2 rounded-full ${
                    activity.type === "plant"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {activity.type === "plant" ? (
                    <TreePine className="w-4 h-4" />
                  ) : (
                    <AlertTriangle className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  {activity.type === "plant" ? (
                    <p className="font-medium mb-1 text-sm">
                      Planted {activity.count} {activity.species}
                    </p>
                  ) : (
                    <p className="font-medium mb-1 text-sm">Submitted report</p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{activity.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Link to="/plant-tree">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <TreePine className="w-4 h-4 mr-2" />
            Plant More Trees
          </Button>
        </Link>
        <Link to="/community">
          <Button variant="outline" className="w-full">
            View Leaderboard
          </Button>
        </Link>
      </div>
    </div>
  );
}