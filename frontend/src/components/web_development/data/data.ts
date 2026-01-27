import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  BarChart,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon; // <-- store icon component, not JSX
}

export const steps: Step[] = [
  {
    id: 1,
    title: "Planning & Strategy",
    description: "Defining the project scope, timeline, and technology stack.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "UI/UX Design & Prototyping",
    description:
      "Crafting wireframes and interactive designs for an optimal user experience.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Development & Implementation",
    description:
      "Writing clean, maintainable code using industry-leading frameworks and tools.",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Conducting rigorous testing to ensure security, performance, and usability.",
    icon: TestTube,
  },
  {
    id: 5,
    title: "Deployment & Launch",
    description:
      "Launching your product with seamless deployment and monitoring.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "Providing ongoing support, updates, and optimization for long-term success.",
    icon: BarChart,
  },
];
