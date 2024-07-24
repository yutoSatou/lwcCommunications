import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import ligtningCardCss from '@salesforce/resourceUrl/lightningCard';

export default class ParentComponent4 extends LightningElement {
  parentValue = '';
  parentValueBubble = '';

  connectedCallback() {
    loadStyle(this, ligtningCardCss);
  }

  handleChange(event) {
    console.log('親のハンドラー');
    this.parentValue = event.detail.value;
  }

  handleChangeBubble(event) {
    console.log('親のハンドラー(バブリング)');
    this.parentValueBubble = event.detail.value;
  }
}
