export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: any;
  last_connection: any;
  rememberMe?: boolean;
};

export type UserDataType = {
  id: string;
  role: string;
  username: string;
};

export type StatusType = (typeof status)[number];

export type User = {
  status: StatusType;
  step: number;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: UserDataType | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
};
