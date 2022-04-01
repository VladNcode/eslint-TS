type FunctionalComponent<T extends object = object> = (props: T & { children?: boolean }) => string;

const component: FunctionalComponent<{ name: string; age: number }> = ({ age, name, children }) => {
  const retVal = `${name} age x5 = ${age * 5} children: ${children}`;
  return retVal;
};

const helloooo = component({ age: 25, name: 'Dima', children: true });

console.log(helloooo);
