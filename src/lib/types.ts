export interface Project {
  id: number;
  name: string;
  startDate?: Date;
  endDate: Date;
  repository: string;
  demo?: string;
  images: string[];
  description: string[];
  technologies: string[];
  featured: boolean;
}