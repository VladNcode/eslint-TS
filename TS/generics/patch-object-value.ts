/* eslint-disable @typescript-eslint/keyword-spacing */
interface Patch {
  <T extends object, U extends keyof T, V extends T[U]>(obj: T, field: U, value: V): T;
}

const patchField = <Patch>function patch(obj, field, value) {
  const cloneObj = { ...obj };
  cloneObj[field] = value;
  return cloneObj;
};

const obj = patchField({ f: 1 }, 'f', 3);

console.log(obj);
