import { LightningElement, api } from 'lwc';

export default class ChildMethodComponent extends LightningElement {
  value = '';
  @api
  setValue(val) {
    this.value = val;
  }
}
