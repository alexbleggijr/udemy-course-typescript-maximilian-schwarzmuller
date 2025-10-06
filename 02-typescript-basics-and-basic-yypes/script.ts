type Role = "admin" | "editor" | "guest";

type User = {
  name: string;
  age: number;
  role: Role;
  pemission: string[];
};

let userRole: Role = "guest";
