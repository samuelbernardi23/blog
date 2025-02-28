import { UserInterface } from "./User";

export interface PostInterface {
    id?: number;
    title: string;
    content: string;
    createdAt?: string;
    createdBy: UserInterface;
}
