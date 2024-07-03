// src/app/models/event.model.ts

export interface Event {
    id?: number;
    title: string;
    lieux: string;
    tlf: number;
    content: string;
    postedby: string;
    filePath: any; // Peut-être utilisé pour stocker le chemin de l'image
    file?: File; // Champ pour stocker les données de l'image
  }
  