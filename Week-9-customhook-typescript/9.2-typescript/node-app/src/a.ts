const x: number = 1;
console.log(x);

function greet(firstName: string): void {
  console.log("Hello " + firstName);
}
greet("Surjeet");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(2));

function delayedCall(fn: () => void): void {
  setTimeout(fn, 1000);
}
//comment
delayedCall(function () {
  console.log("hi there");
});

//interface

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
// }

// const user: User = {
//   firstName: "harkirat",
//   lastName: "singh",
//   email: "email@gmail.com",
//   age: 21,
// };

function isLegalUpdated(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}
interface TodInput {
  todo: TodoType;
}
// export const TODO = ({ todo }: TodInput): any => {
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </div>
//   );
// };

// union using type
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//Intersection using type
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer",
};

//interface can be extended using implements
//type can be used for union and intersection

// Array
type NumArr = number[];
// interface numArr {
//   arr: number[];
// }
function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "harkirat",
      lastName: "Singh",
      age: 21,
    },
    {
      firstName: "Raman",
      lastName: "Singh",
      age: 16,
    },
  ])
);

//one interface can be extended to another interface
function a() {
  console.log("hi");
}
