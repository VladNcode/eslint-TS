function getKey<T extends object, K extends keyof T>(obj: T, value: T[K]): keyof T | null {
  return (Object.keys(obj) as Array<K>).find(key => obj[key] === value) || null;
}

const key = getKey({ name: 'Max', age: 25 }, 'Dima');
console.log(key);
