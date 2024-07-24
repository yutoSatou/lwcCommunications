import { LightningElement } from 'lwc';

export default class ChildEventComponent2 extends LightningElement {
  handleChange(event) {
    console.log('子のハンドラー');
    const value = event.detail.value;
    this.dispatchEvent(
      new CustomEvent('childchange', {
        detail: { value }
      })
    );
  }
}
