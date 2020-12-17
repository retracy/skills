import { Observable } from "rxjs";
import { ICVInfo } from "./cv";

export class Candidate {
    id: number;
    name: string;
    photo: string;
    title: string;
    cvInfo: Observable<ICVInfo>;
}
