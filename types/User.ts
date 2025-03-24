export type User = {
  name: string;
  surname: string;
  credentials: {
    username: string;
    passphrase: string;
  };
  active: boolean;
  created: string; // Можно заменить на Date, если парсить дату
  _comment?: string;
};