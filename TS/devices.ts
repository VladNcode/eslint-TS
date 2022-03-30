interface Device {
  name: string;
}

class Phone implements Device {
  constructor(public name: string) {}
}

function call(phone: Phone): void {
  console.log('Make a call by', phone.name);
}

export { Device, Phone, call as makeCall };
