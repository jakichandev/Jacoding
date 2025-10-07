import type { Tech } from "../Tech/Tech";

export interface Project {
  label: string;
  image: string | undefined;
  body: string;
  stack: Tech[];
  links: {
    github: string;
    online?: string;
  } 
}