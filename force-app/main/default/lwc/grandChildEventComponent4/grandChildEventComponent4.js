import { LightningElement } from 'lwc';

export default class GrandChildEventComponent4 extends LightningElement {
  handleChange(event) {
    // event.preventDefault();
    console.log('孫のハンドラー');
    const value = event.detail.value;
    this.dispatchEvent(
      new CustomEvent('grandchildchange', {
        detail: { value }
      })
    );
  }
}
