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

// ============================ 3333333333333333333333=========================


