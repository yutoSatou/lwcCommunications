import { LightningElement, api } from 'lwc';

export default class ChildMethodComponent3 extends LightningElement {
  value = '';
  @api
  setChildValue(val) {
    this.value = val;
    this.template
      .querySelector('c-grand-child-method-component3')
      .setGrandChildValue(val);
  }
}
