import { useState } from "react";
import { useNavigate } from "react-router";
import { TreePine, Camera, MapPin, Plus, Minus, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const treeSpecies = [
  "Red Maple",
  "White Oak",
  "American Elm",
  "Eastern Redbud",
  "Willow",
  "River Birch",
  "Sycamore",
  "Cottonwood",
  "Native Pine",
  "Spruce",
  "Oak",
  "Beech",
  "Apple",
  "Cherry",
  "Dogwood",
  "Magnolia",
];

export function PlantTree() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [species, setSpecies] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl mb-2 font-bold">Trees Recorded!</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Your planting has been added to your profile.
          </p>
          <p className="text-lg text-green-600 font-semibold">
            You've planted {count} tree{count > 1 ? "s" : ""}!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl mb-2 flex items-center gap-2 font-bold">
          <TreePine className="w-7 h-7 text-green-600" />
          Plant Tree
        </h1>
        <p className="text-gray-600 text-sm">
          Record your tree planting activity
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tree Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setCount(Math.max(1, count - 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-4xl font-semibold text-green-600">{count}</div>
                <div className="text-sm text-gray-600">tree{count > 1 ? "s" : ""}</div>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setCount(count + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tree Species</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={species} onValueChange={setSpecies} required>
              <SelectTrigger>
                <SelectValue placeholder="Select species" />
              </SelectTrigger>
              <SelectContent>
                {treeSpecies.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4 text-blue-600" />
              GPS Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-900 mb-1">Location auto-tagged:</p>
              <p className="font-mono text-sm">40.7989° N, 73.9551° W</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Camera className="w-4 h-4 text-purple-600" />
              Photo Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
              <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Tap to upload photo</p>
              <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
              <Input type="file" accept="image/*" className="hidden" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notes (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Add any additional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
          <TreePine className="w-5 h-5 mr-2" />
          Submit Tree Planting
        </Button>
      </form>
    </div>
  );
}