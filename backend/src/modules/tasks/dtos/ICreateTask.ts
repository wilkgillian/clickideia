export interface ICreateTaskDTO {
  id?: string;
  title: string;
  content: string;
  list: string;
  status: 'completed' | 'to_do' | 'to_define' | 'making';
  userId: string;
}
