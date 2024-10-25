// types/index.ts
export interface User {
    id: string;
    name: string;
    role: string;
    photo: string;
    status: 'online' | 'offline' | 'busy';
}

export interface Project {
    id: string;
    title: string;
    code: string;
    date: string;
    priority: 'High' | 'Medium' | 'Low';
    tasks: number;
    activeTasks: number;
    assignees: string[];
}
  
export interface MenuItem {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    path: string;
}