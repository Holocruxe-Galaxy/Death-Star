export interface DiaryPost {
  userId: string;
  content: string;
  date: string;
  state: string;
  attachFiles: string[];
  favorite: boolean;
}
