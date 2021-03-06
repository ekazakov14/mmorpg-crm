export type PropertiesKeysOf<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [key in keyof T]: T[key] extends Function ? never : key;
}[keyof T];
