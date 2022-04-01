function getValue<T, U extends keyof T>(obj: T, key: U): T[U] | null {
  return obj[key] || null;
}

const val = getValue({ a: 5 }, 'a');
console.log(val);
