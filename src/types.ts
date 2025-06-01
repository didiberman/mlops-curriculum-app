export interface DailyTasks {
  [day: string]: string[];
}

interface PortfolioProject {
  name: string;
  skills: string[];
  description: string;
}

interface PortfolioGuide {
  title: string;
  description: string;
  projects: PortfolioProject[];
  tips: string[];
}

export interface WeekData {
  title: string;
  intro?: string;
  goal: string;
  days: DailyTasks;
  deliverables: string[];
  skills: string[];
  resources?: {
    documentation: string[];
    tutorials: string[];
    tools: string[];
  };
  prerequisites?: string[];
  outcomes?: string[];
  tips?: string[];
  reflection?: string;
  portfolioGuide?: PortfolioGuide;
}