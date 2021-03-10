export const deleteProperty = (obj: Record<string, any>, key: string) => {
  delete obj[key];
  return obj;
};
