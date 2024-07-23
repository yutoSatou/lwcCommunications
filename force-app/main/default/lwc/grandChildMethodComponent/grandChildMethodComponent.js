import { LightningElement, api } from 'lwc';

export default class GrandChildMethodComponent extends LightningElement {
  grandChildValue;
  @api
  setGrandChildValue(val) {
    this.grandChildValue = val;
  }
}
