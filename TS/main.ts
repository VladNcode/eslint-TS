import hello from './message.js';
import { Phone, makeCall } from './devices.js';
import SmartWatch from './smartwatch.js';

const iphone: Phone = new Phone('iPhone X');
makeCall(iphone);

const watch: SmartWatch = new SmartWatch('Apple Watch');
watch.printModel();

hello();
