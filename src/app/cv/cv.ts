export enum DegreeType {
  Bachelors,
  Masters
}

export interface IDegreeInfo {
  university: string;
  degree: DegreeType;
  major: string;
  startDate: Date;
  endDate: Date;
}

export interface IJobInfo {
  company: string;
  city: string;
  title: string;
  startDate: Date;
  endDate: Date;
  duties: string[];
}

export interface ITechnologiesInfo {
  categorty: string;
  items: string[];
}

export interface ICVInfo {
  technologies:  ITechnologiesInfo[];
  degrees: IDegreeInfo[];
  jobs: IJobInfo[];
}
