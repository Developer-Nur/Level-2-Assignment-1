type InputType = string | number | boolean;

const formatValue = (input: InputType): string | number | boolean => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    const multiplier = input * 10;
    return multiplier;
  } else {
    return !input;
  }
};

// ============================ 222222222222222222222 =========================

type StringOrArray = string | any[];

const getLength = (input: StringOrArray): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

// ============================ 3333333333333333333333=========================

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// ============================ 4444444444444444444444444 =========================

type TopRating = {
  title: string;
  rating: number;
};

type ArrayOfTopRated = TopRating[];

const filterByRating = (input: ArrayOfTopRated): ArrayOfTopRated => {
  return input.filter((item) => item.rating >= 4);
};

// ============================ 55555555555555555555555555555 =========================

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type UsersArray = Users[];

const filterActiveUsers = (input: UsersArray): UsersArray => {
  return input.filter((item) => item.isActive === true);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// ============================ 66666666666666666666666666666666666 =========================

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book): string => {
  const { title, author, publishedYear, isAvailable } = input;
  return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
    isAvailable ? "Yes" : "No"
  }`;
};


// ============================ 777777777777777777777777777777777777 =========================

