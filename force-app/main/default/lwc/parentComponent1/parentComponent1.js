import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ligtningCardCss from '@salesforce/resourceUrl/lightningCard';

export default class ParentComponent1 extends LightningElement {
  parentValueProp = '';

  connectedCallback() {
    loadStyle(this, ligtningCardCss);
  }

  handlePropInputChange(event) {
    this.parentValueProp = event.detail.value;
  }

  handleMethInputChange(event) {
    this.template
      .querySelector('c-child-method-component1')
      .setValue(event.detail.value);
  }
}
