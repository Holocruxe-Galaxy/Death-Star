export interface DiaryPost {
  userId: string;
  content: string;
  date: Date;
  state: string;
  attachFiles: string[];
  favorite: boolean;
}
