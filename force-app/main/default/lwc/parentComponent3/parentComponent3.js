import { LightningElement } from 'lwc';

export default class ParentComponent3 extends LightningElement {
  parentValueProp = '';
  handlePropInputChange(event) {
    this.parentValueProp = event.detail.value;
  }
  handleMethInputChange(event) {
    this.template
      .querySelector('c-child-method-component3')
      .setChildValue(event.detail.value);
  }
}
