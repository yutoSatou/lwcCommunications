import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ligtningCardCss from '@salesforce/resourceUrl/lightningCard';

export default class ParentConponent2 extends LightningElement {
  childValue = '';

  connectedCallback() {
    loadStyle(this, ligtningCardCss);
  }

  handleChange(event) {
    this.childValue = event.detail.value;
  }
}