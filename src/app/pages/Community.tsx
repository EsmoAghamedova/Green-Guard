import { useState } from "react";
import { Trophy, Users, Calendar, TreePine, Newspaper, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

const leaderboardData = [
  { rank: 1, name: "Sarah Forest", trees: 324, badge: "🏆" },
  { rank: 2, name: "Mike Woods", trees: 298, badge: "🥈" },
  { rank: 3, name: "Emma Green", trees: 276, badge: "🥉" },
  { rank: 4, name: "John Oak", trees: 234, badge: "" },
  { rank: 5, name: "Lisa Pine", trees: 189, badge: "" },
  { rank: 6, name: "Tom Maple", trees: 167, badge: "" },
  { rank: 7, name: "Maria Cedar", trees: 143, badge: "" },
  { rank: 8, name: "Alex Green", trees: 47, badge: "👤", isCurrentUser: true },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Community Tree Planting Day",
    date: "March 15, 2026",
    location: "Central Park North",
    participants: 45,
  },
  {
    id: 2,
    title: "Forest Conservation Workshop",
    date: "March 20, 2026",
    location: "Community Center",
    participants: 28,
  },
  {
    id: 3,
    title: "Spring Planting Initiative",
    date: "April 1, 2026",
    location: "Riverside Green Belt",
    participants: 67,
  },
];

const newsItems = [
  {
    id: 1,
    title: "Community Reaches 10,000 Trees Milestone!",
    date: "March 9, 2026",
    excerpt:
      "Our community has collectively planted over 10,000 trees, making a significant impact on local air quality and biodiversity.",
  },
  {
    id: 2,
    title: "New Protected Forest Area Established",
    date: "March 5, 2026",
    excerpt:
      "Thanks to community reports, a new 50-acre forest area has been designated as protected land.",
  },
  {
    id: 3,
    title: "Monthly Top Planter: Sarah Forest",
    date: "March 1, 2026",
    excerpt:
      "Sarah has planted an incredible 85 trees this month alone. Her dedication inspires us all!",
  },
];

export function Community() {
  const [selectedTab, setSelectedTab] = useState("leaderboard");

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl mb-2 flex items-center gap-2 font-bold">
          <Users className="w-7 h-7 text-green-600" />
          Community
        </h1>
        <p className="text-gray-600 text-sm">Join our collective effort to restore forests</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-green-100 rounded-lg mb-2">
                <TreePine className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-semibold">10,247</div>
              <div className="text-xs text-gray-600 text-center">Trees</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-blue-100 rounded-lg mb-2">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-semibold">1,234</div>
              <div className="text-xs text-gray-600 text-center">Members</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-purple-100 rounded-lg mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-2xl font-semibold">204t</div>
              <div className="text-xs text-gray-600 text-center">CO₂ Reduced</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center">
              <div className="p-2 bg-yellow-100 rounded-lg mb-2">
                <Calendar className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-2xl font-semibold">3</div>
              <div className="text-xs text-gray-600 text-center">Events</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="leaderboard" className="text-xs">
            <Trophy className="w-3 h-3 mr-1" />
            Leaders
          </TabsTrigger>
          <TabsTrigger value="events" className="text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            Events
          </TabsTrigger>
          <TabsTrigger value="news" className="text-xs">
            <Newspaper className="w-3 h-3 mr-1" />
            News
          </TabsTrigger>
        </TabsList>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Trophy className="w-5 h-5 text-yellow-600" />
                Top Planters - March
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboardData.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.isCurrentUser
                        ? "bg-green-50 border-2 border-green-500"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="w-8 text-center text-sm">
                      {user.badge || <span className="font-semibold">#{user.rank}</span>}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-green-600 text-white text-sm">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm flex items-center gap-2">
                        <span className="truncate">{user.name}</span>
                        {user.isCurrentUser && <Badge className="text-xs">You</Badge>}
                      </p>
                      <p className="text-xs text-gray-600">{user.trees} trees</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events">
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-3">
                    <div className="p-2 bg-green-100 rounded-lg h-fit">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>📅 {event.date}</p>
                        <p>📍 {event.location}</p>
                        <p>👥 {event.participants} joining</p>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-green-600">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* News Tab */}
        <TabsContent value="news">
          <div className="space-y-3">
            {newsItems.map((news) => (
              <Card key={news.id}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg h-fit">
                      <Newspaper className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold mb-2">{news.title}</h3>
                      <p className="text-sm text-gray-700 mb-2">{news.excerpt}</p>
                      <p className="text-xs text-gray-500">{news.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}