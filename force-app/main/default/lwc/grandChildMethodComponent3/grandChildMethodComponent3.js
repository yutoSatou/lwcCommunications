import { LightningElement, api } from 'lwc';

export default class GrandChildMethodComponent3 extends LightningElement {
  grandChildValue;
  @api
  setGrandChildValue(val) {
    this.grandChildValue = val;
  }
}
