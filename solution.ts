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



type StringOrArray = string | any[];

const getLength = (input: StringOrArray): number | undefined => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};



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



type TopRating = {
  title: string;
  rating: number;
};

const filterByRating = (input: TopRating[]): TopRating[] => {
  return input.filter((item) => item.rating >= 4);
};



type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (input: Users[]): Users[] => {
  return input.filter((item) => item.isActive === true);
};



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



type CheckUnique = string | number;

const getUniqueValues = (
  array1: CheckUnique[],
  array2: CheckUnique[]
): CheckUnique[] => {
  const result: CheckUnique[] = [];

  for (const item of [...array1, ...array2]) {
    let isSame = false;

    for (const element of result) {
      if (element === item) {
        isSame = true;
        break;
      }
    }
    if (!isSame) result.push(item);
  }
  return result;
};



type ProductInfo = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (input: ProductInfo[]) => {
  if (!input || input.length === 0) {
    return 0;
  }

  return input.reduce((total: number, item: ProductInfo) => {
    let price = item.price * item.quantity;

    if (item.discount && item.discount > 0) {
      const discountAmount = price * (item.discount / 100);
      price -= discountAmount;
    }

    return total + price;
  }, 0);
};