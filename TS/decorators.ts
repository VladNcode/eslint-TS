interface PropertyDescriptor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

function log(target: Calculator, method: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  // eslint-disable-next-line no-param-reassign
  descriptor.value = function loggin(...args: number[]) {
    const returnValue = originalMethod.apply(this, args);
    console.log(`[${args}]`);
    console.log(`[${args}] => ${returnValue}`);
    return returnValue;
  };
}

class Calculator {
  @log
  static add(x: number, y: number): number {
    return x + y;
  }
}

// const calc = new Calculator();
Calculator.add(4, 5);
Calculator.add(6, 7);
