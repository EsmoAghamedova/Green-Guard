import { Link } from "react-router";
import { Map, Users, TreePine, Sparkles, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function Home() {
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section
        className="relative bg-green-700 text-white py-12 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 101, 52, 0.85), rgba(22, 101, 52, 0.85)), url(https://images.unsplash.com/photo-1640865651855-68079e656075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBncmVlbiUyMHRyZWVzJTIwbmF0dXJlfGVufDF8fHx8MTc3MzIyMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <TreePine className="w-16 h-16" />
          </div>
          <h1 className="text-3xl mb-3 font-bold">Tree Planting App</h1>
          <p className="text-base mb-2 px-2">
            Empowering communities to plant trees in the right place, at the right time
          </p>
          <p className="text-sm mb-6 opacity-90 px-4">
            Join the fight against deforestation. Track progress. Make an impact.
          </p>
          <div className="flex flex-col gap-3 px-4">
            <Link to="/map" className="block">
              <Button size="lg" className="w-full bg-white text-green-700 hover:bg-gray-100">
                <Map className="w-5 h-5 mr-2" />
                Explore Map
              </Button>
            </Link>
            <Link to="/community" className="block">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/20"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-8 px-4 bg-white">
        <h2 className="text-2xl mb-4 text-center font-semibold">The Problem</h2>
        <p className="text-base text-gray-700 mb-3">
          Deforestation is one of the most urgent environmental crises. Each year, millions of hectares are lost, releasing CO2 and destroying habitats.
        </p>
        <p className="text-base text-gray-700 mb-4">Communities need tools to:</p>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start">
            <span className="text-green-600 mr-2 text-lg font-bold">•</span>
            <span>Identify WHERE trees should be planted</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 text-lg font-bold">•</span>
            <span>Know WHICH species suit their local conditions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 text-lg font-bold">•</span>
            <span>REPORT illegal tree cutting before damage spreads</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 text-lg font-bold">•</span>
            <span>TRACK collective community progress</span>
          </li>
        </ul>
      </section>

      {/* Features */}
      <section className="py-8 px-4 bg-gray-50">
        <h2 className="text-2xl mb-6 text-center font-semibold">Key Features</h2>
        <div className="space-y-3">
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Map className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Explore Planting Zones</h3>
                  <p className="text-sm text-gray-600">
                    View maps showing where trees are needed most
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Plant & Track Trees</h3>
                  <p className="text-sm text-gray-600">
                    Record plantings with photos and GPS location
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Report Deforestation</h3>
                  <p className="text-sm text-gray-600">
                    Alert authorities about illegal cutting
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">AI Recommendations</h3>
                  <p className="text-sm text-gray-600">
                    Get suggestions for best species for your area
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Impact Dashboard</h3>
                  <p className="text-sm text-gray-600">
                    Visualize your environmental impact
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Community Hub</h3>
                  <p className="text-sm text-gray-600">
                    Connect with planters and see leaderboards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 bg-white">
        <h2 className="text-2xl mb-4 text-center font-semibold">Quick Actions</h2>
        <div className="space-y-3">
          <Link to="/map" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <Map className="w-5 h-5 mr-2" />
              View Map
            </Button>
          </Link>
          <Link to="/plant-tree" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <TreePine className="w-5 h-5 mr-2" />
              Plant Tree
            </Button>
          </Link>
          <Link to="/ai-advisor" className="block">
            <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              AI Plant Advisor
            </Button>
          </Link>
          <Link to="/impact" className="block">
            <Button className="w-full" variant="outline" size="lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Impact
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}