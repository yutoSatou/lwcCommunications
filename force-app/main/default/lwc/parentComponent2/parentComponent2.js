import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ligtningCardCss from '@salesforce/resourceUrl/lightningCard';

export default class ParentComponent2 extends LightningElement {
  childValue = '';

  connectedCallback() {
    loadStyle(this, ligtningCardCss);
  }

  handleChange(event) {
    console.log('親のハンドラー');
    this.childValue = event.detail.value;
  }
}
