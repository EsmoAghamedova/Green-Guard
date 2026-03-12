import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { MapScreen } from "./pages/MapScreen";
import { LocationDetails } from "./pages/LocationDetails";
import { PlantTree } from "./pages/PlantTree";
import { ReportCutting } from "./pages/ReportCutting";
import { UserProfile } from "./pages/UserProfile";
import { Community } from "./pages/Community";
import { ImpactDashboard } from "./pages/ImpactDashboard";
import { AIPlantAdvisor } from "./pages/AIPlantAdvisor";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "map", Component: MapScreen },
      { path: "location/:id", Component: LocationDetails },
      { path: "plant-tree", Component: PlantTree },
      { path: "report-cutting", Component: ReportCutting },
      { path: "profile", Component: UserProfile },
      { path: "community", Component: Community },
      { path: "impact", Component: ImpactDashboard },
      { path: "ai-advisor", Component: AIPlantAdvisor },
    ],
  },
]);
