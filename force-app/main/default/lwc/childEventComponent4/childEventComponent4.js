import { LightningElement } from 'lwc';

export default class ChildEventComponent4 extends LightningElement {
  childValue = '';
  handleChange(event) {
    console.log('子のハンドラー');
    const value = event.detail.value;
    this.childValue = value;
    this.dispatchEvent(
      new CustomEvent('childchange', {
        detail: { value }
      })
    );
  }
}
