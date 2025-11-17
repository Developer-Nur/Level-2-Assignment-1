type inputType = string | number | boolean;

const formatValue = (input: inputType): string | number | boolean => {
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

