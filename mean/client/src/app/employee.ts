export interface Employee {
  name: string;
  position: string;
  level: 'junior' | 'mid' | 'senior' | 'expert';
  _id?: string;
}
