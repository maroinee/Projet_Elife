export interface PostUser {
  id: number;
  name: string;
  postedby: string;
  date: Date;
  lieux: string;
  content: string;
  tags: any[]; 
  img?: string; 
  likeCount: number;
  viewCount: number;
  email: string; 
}
