export interface Photograph {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  isSaved?: boolean;
  isRotatingOut?: boolean;
  isRotatingIn?: boolean;
}
