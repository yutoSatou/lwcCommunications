import { LightningElement } from 'lwc';

export default class ChildEventComponentBubbling4 extends LightningElement {
  childValue = '';
  handleChange(event) {
    console.log('子のハンドラー(バブリング)');
    const value = event.detail.value;
    this.childValue = value;
  }
}
