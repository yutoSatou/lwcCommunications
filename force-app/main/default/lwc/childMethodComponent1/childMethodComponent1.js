import { LightningElement, api } from 'lwc';

export default class ChildMethodComponent1 extends LightningElement {
  value = '';
  @api
  setValue(val) {
    this.value = val;
  }
}
