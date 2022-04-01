function format<T = string>(s?: T): T | undefined {
  return s;
}

const r1 = format();
console.log(r1);
