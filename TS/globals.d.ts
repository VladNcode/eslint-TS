interface XYobj {
  X: number;
  Y: number;
}

declare const message: string;
declare function hello(): void;
declare function sum(a: number, b: number): number;
declare const tom: { name: string; age: number; print: (data: string) => void };
declare const points: XYobj[];
declare class Person {
  constructor(public name: string, public age: number);
  display() {
    console.log(this.name, this.age);
  }
}
