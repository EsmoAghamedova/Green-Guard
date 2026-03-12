import { useParams, Link } from "react-router";
import { MapPin, Droplets, Thermometer, TreePine, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const locationData: Record<
  string,
  {
    name: string;
    description: string;
    soilType: string;
    weather: string;
    treesNeeded: number;
    recommendedSpecies: string[];
    bestPlantingTime: string;
    coordinates: string;
  }
> = {
  "1": {
    name: "Central Park North",
    description:
      "A spacious area in the northern section of Central Park suitable for reforestation. The area has good sunlight exposure and moderate foot traffic.",
    soilType: "Loamy soil with good drainage",
    weather: "Temperate, avg. 65°F, moderate rainfall",
    treesNeeded: 150,
    recommendedSpecies: ["Red Maple", "White Oak", "American Elm", "Eastern Redbud"],
    bestPlantingTime: "Spring (March-May) or Fall (September-November)",
    coordinates: "40.7989° N, 73.9551° W",
  },
  "2": {
    name: "Riverside Green Belt",
    description:
      "A green corridor along the riverside that requires tree coverage to prevent erosion and improve local biodiversity.",
    soilType: "Clay soil with high moisture retention",
    weather: "Humid, avg. 63°F, high rainfall near water",
    treesNeeded: 200,
    recommendedSpecies: ["Willow", "River Birch", "Sycamore", "Cottonwood"],
    bestPlantingTime: "Early Spring (March-April)",
    coordinates: "40.8045° N, 73.9654° W",
  },
  "3": {
    name: "Forest Edge - Illegal Cutting",
    description:
      "Recent illegal logging activity detected. This area requires immediate attention and restoration efforts.",
    soilType: "Mixed forest soil",
    weather: "Moderate climate, seasonal variations",
    treesNeeded: 300,
    recommendedSpecies: ["Native Pine", "Spruce", "Oak", "Beech"],
    bestPlantingTime: "Spring (April-May)",
    coordinates: "40.7892° N, 73.9445° W",
  },
  "4": {
    name: "Community Garden Area",
    description:
      "Adjacent to community gardens, this area can benefit from shade trees and fruit-bearing species.",
    soilType: "Sandy loam with good nutrients",
    weather: "Sunny, avg. 68°F, moderate rainfall",
    treesNeeded: 75,
    recommendedSpecies: ["Apple", "Cherry", "Dogwood", "Magnolia"],
    bestPlantingTime: "Fall (October-November)",
    coordinates: "40.7955° N, 73.9512° W",
  },
};

export function LocationDetails() {
  const { id } = useParams();
  const location = id ? locationData[id] : null;

  if (!location) {
    return (
      <div className="p-4">
        <p className="text-gray-600">Location not found.</p>
        <Link to="/map">
          <Button className="mt-4">Back to Map</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link to="/map">
        <Button variant="ghost" size="sm" className="mb-3 -ml-2">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
      </Link>

      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">{location.name}</h1>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin className="w-3 h-3" />
          <span>{location.coordinates}</span>
        </div>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Location Info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">{location.description}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Droplets className="w-4 h-4 text-blue-600" />
              Soil Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-700">{location.soilType}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Thermometer className="w-4 h-4 text-orange-600" />
              Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-700">{location.weather}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TreePine className="w-4 h-4 text-green-600" />
            Trees Needed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl font-semibold text-green-600">{location.treesNeeded}</div>
            <div className="text-xs text-gray-600">trees needed</div>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-3 mb-1">
            <div
              className="bg-green-600 h-3 rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>
          <div className="text-xs text-gray-600">35% planted</div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Recommended Species</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {location.recommendedSpecies.map((species) => (
              <Badge key={species} variant="secondary" className="text-xs">
                {species}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Calendar className="w-4 h-4 text-purple-600" />
            Best Planting Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">{location.bestPlantingTime}</p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3">
        <Link to="/plant-tree">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <TreePine className="w-4 h-4 mr-2" />
            Plant Tree Here
          </Button>
        </Link>
        <Link to="/ai-advisor">
          <Button variant="outline" className="w-full">
            Get AI Recommendations
          </Button>
        </Link>
      </div>
    </div>
  );
}