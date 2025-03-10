export type StartupCardType = {
  _createdAt: Date;
  _id: number;
  views: number;
  author: { _id: number; name: string };
  description: string;
  category: string;
  title: string;
  image: string;
}
