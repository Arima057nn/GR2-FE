import { CatetoryInterface } from "./category";

export interface RequestCreateInterface {
  title: string;
  content: string;
  userId: string;
  status: number;
  categoryId: string;
}

export interface RequestInterface {
  _id: string;
  title: string;
  content: string;
  status: number;
  userId: string;
  categoryId: CatetoryInterface;
  managerId: string;
  updatedAt: Date;
  createdAt: Date;
  __v: number;
}
