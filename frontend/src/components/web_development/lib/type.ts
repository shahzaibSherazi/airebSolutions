// types.ts
import { ReactNode } from "react";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}
