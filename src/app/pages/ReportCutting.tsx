import { useState } from "react";
import { useNavigate } from "react-router";
import { AlertTriangle, Camera, MapPin, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function ReportCutting() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/community");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-2xl mb-2 font-bold">Report Submitted!</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Your report has been sent to authorities.
          </p>
          <p className="text-base text-red-600 font-semibold">Thank you for protecting our forests!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl mb-2 flex items-center gap-2 font-bold">
          <AlertTriangle className="w-7 h-7 text-red-600" />
          Report Cutting
        </h1>
        <p className="text-gray-600 text-sm">
          Report deforestation with photo evidence
        </p>
      </div>

      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-xs text-red-900">
          <strong>Important:</strong> Your report will be shared with authorities. Please provide accurate information.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <MapPin className="w-4 h-4 text-blue-600" />
              GPS Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-900 mb-1">Location auto-filled:</p>
              <p className="font-mono text-sm">40.7892° N, 73.9445° W</p>
              <p className="text-xs text-gray-600 mt-2">
                Forest Edge area - high-risk zone
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Camera className="w-4 h-4 text-purple-600" />
              Photo Evidence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors cursor-pointer">
                <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Tap to upload photo</p>
                <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
                <Input type="file" accept="image/*" className="hidden" />
              </div>
              <p className="text-xs text-gray-600">
                Photos help authorities verify and respond faster
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Description</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Describe what you observed (e.g., number of trees cut, equipment seen, time)..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              required
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Report Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium text-red-600">Illegal Cutting</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">Mar 11, 2026 - 2:30 PM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Reporter:</span>
              <span className="font-medium">Anonymous</span>
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700"
          size="lg"
          disabled={!description}
        >
          <AlertTriangle className="w-5 h-5 mr-2" />
          Submit Report
        </Button>
      </form>
    </div>
  );
}