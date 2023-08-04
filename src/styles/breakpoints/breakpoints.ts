interface Size {
  sm: string;
}

const size: Size = {
  sm: "600px",
};

export const device = {
  sm: `(max-width: ${size.sm})`,
};
