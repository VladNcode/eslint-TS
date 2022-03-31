function LogTime() {
  return (
    target: TestServiceDeco,
    propertyName: string,
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    descriptor: TypedPropertyDescriptor<() => void>
  ) => {
    const method = descriptor.value;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function change(...args) {
      console.time(propertyName || 'LogTime');
      const result = method?.apply(this, args);
      console.timeEnd(propertyName || 'LogTime');
      return result;
    };
  };
}

class TestServiceDeco {
  @LogTime()
  static testLogging() {
    console.log('123');
  }
}

TestServiceDeco.testLogging();
