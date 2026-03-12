import { useState } from "react";
import { Sparkles, MapPin, Droplets, Thermometer, TreePine, Calendar, Lightbulb } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";

const soilTypes = ["Loamy", "Clay", "Sandy", "Sandy Loam", "Silty", "Peaty", "Chalky"];
const climateZones = ["Temperate", "Tropical", "Arid", "Continental", "Mediterranean", "Polar"];
const seasons = ["Spring", "Summer", "Fall", "Winter"];

interface Recommendation {
  species: string;
  compatibility: number;
  benefits: string[];
  careLevel: "Easy" | "Moderate" | "Advanced";
  growthRate: string;
  matureHeight: string;
}

const mockRecommendations: Recommendation[] = [
  {
    species: "Red Maple",
    compatibility: 95,
    benefits: ["Fast growing", "Excellent fall color", "Adaptable to various soils"],
    careLevel: "Easy",
    growthRate: "Fast (2-3 ft/year)",
    matureHeight: "40-60 ft",
  },
  {
    species: "White Oak",
    compatibility: 88,
    benefits: ["Long-lived", "Wildlife habitat", "Strong wood"],
    careLevel: "Moderate",
    growthRate: "Slow (1 ft/year)",
    matureHeight: "50-80 ft",
  },
  {
    species: "River Birch",
    compatibility: 82,
    benefits: ["Tolerates wet soil", "Attractive bark", "Native species"],
    careLevel: "Easy",
    growthRate: "Fast (2 ft/year)",
    matureHeight: "40-70 ft",
  },
];

export function AIPlantAdvisor() {
  const [soilType, setSoilType] = useState("");
  const [climate, setClimate] = useState("");
  const [season, setSeason] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleGetRecommendations = () => {
    if (soilType && climate && season) {
      setShowResults(true);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl mb-2 flex items-center gap-2 font-bold">
          <Sparkles className="w-7 h-7 text-purple-600" />
          AI Plant Advisor
        </h1>
        <p className="text-gray-600 text-sm">
          Get AI-powered species recommendations
        </p>
      </div>

      {/* Input Form */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Location Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="flex items-center gap-2 mb-2 text-sm">
              <Droplets className="w-4 h-4 text-blue-600" />
              Soil Type
            </Label>
            <Select value={soilType} onValueChange={setSoilType}>
              <SelectTrigger>
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                {soilTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-2 text-sm">
              <Thermometer className="w-4 h-4 text-orange-600" />
              Climate Zone
            </Label>
            <Select value={climate} onValueChange={setClimate}>
              <SelectTrigger>
                <SelectValue placeholder="Select climate zone" />
              </SelectTrigger>
              <SelectContent>
                {climateZones.map((zone) => (
                  <SelectItem key={zone} value={zone}>
                    {zone}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="flex items-center gap-2 mb-2 text-sm">
              <Calendar className="w-4 h-4 text-green-600" />
              Planting Season
            </Label>
            <Select value={season} onValueChange={setSeason}>
              <SelectTrigger>
                <SelectValue placeholder="Select season" />
              </SelectTrigger>
              <SelectContent>
                {seasons.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleGetRecommendations}
            disabled={!soilType || !climate || !season}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get Recommendations
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && (
        <>
          <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-purple-900 mb-1 text-sm">Analysis Complete</p>
              <p className="text-xs text-purple-800">
                Based on {soilType} soil, {climate} climate, and {season} season.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {mockRecommendations.map((rec, index) => (
              <Card key={rec.species} className="border-2 border-purple-200">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                        {index === 0 && "🏆"}
                        {rec.species}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">{rec.careLevel}</Badge>
                        <Badge variant="outline" className="text-xs">{rec.growthRate}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-purple-600">
                        {rec.compatibility}%
                      </div>
                      <div className="text-[10px] text-gray-600">Match</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div>
                      <p className="text-xs font-medium text-gray-700 mb-1">Benefits:</p>
                      <ul className="space-y-0.5">
                        {rec.benefits.map((benefit, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-medium text-gray-700">Growth:</p>
                        <p className="text-gray-600">{rec.growthRate}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Height:</p>
                        <p className="text-gray-600">{rec.matureHeight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700" size="sm">
                      <TreePine className="w-3 h-3 mr-1" />
                      Select
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Care Tips */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                Planting Tips for {season}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600">•</span>
                  <span>Dig hole 2-3 times wider than root ball</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600">•</span>
                  <span>Water thoroughly and maintain moisture</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600">•</span>
                  <span>Apply 2-4 inches of mulch around base</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600">•</span>
                  <span>Wait for new growth before fertilizing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}