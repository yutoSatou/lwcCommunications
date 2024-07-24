import { LightningElement } from 'lwc';

export default class GrandChildEventComponentBubbling4 extends LightningElement {
  handleChange(event) {
    console.log('孫イベント(バブリング)');
    const value = event.detail.value;
    this.dispatchEvent(
      new CustomEvent('grandchildchangebubble', {
        detail: { value },
        bubbles: true,
        composed: true
      })
    );
  }
}
