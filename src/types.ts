export interface DailyTasks {
  [day: string]: string[];
}

export interface WeekData {
  title: string;
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
}