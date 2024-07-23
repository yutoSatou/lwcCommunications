import { LightningElement, api } from 'lwc';

export default class ChildMethodComponent2 extends LightningElement {
  value = '';
  @api
  setChildValue(val) {
    this.value = val;
    this.template
      .querySelector('c-grand-child-method-component')
      .setGrandChildValue(val);
  }
}
