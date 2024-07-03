export interface PostUser {
  id: number;
  name: string;
  postedby: string;
  date: Date;
  lieux: string;
  content: string;
  tags: any[]; // Définir correctement le type des tags si nécessaire
  img?: string; // Ajouter d'autres propriétés au besoin
  likeCount: number;
  viewCount: number;
  email: string; // Ajouter la propriété email
}
