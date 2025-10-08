const logMsn = (msg: string) => {
  console.log(msg);
};

function performJob(cb: (m: string) => void) {
  cb("Job Done!");
}

performJob(logMsn);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Max",
  age: 39,
  greet() {
    console.log("Hello there");
    return this.name;
  },
};

user.greet();
