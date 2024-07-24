import { LightningElement, wire } from 'lwc';
// LMSで使用するMessageChannelをインポートします。
import { publish, MessageContext } from 'lightning/messageService';
import SMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class Publisher extends LightningElement {
  value = '';
  @wire(MessageContext)
  messageContext;

  handleChange(event) {
    this.value = event.detail.value;
    this.sendMessage(this.value);
  }

  sendMessage(value) {
    // publishメソッドで入力された値をSampleMessageに公開します。
    const payload = {
      type: 'LightningMessageService',
      value: value
    };
    publish(this.messageContext, SMC, payload);
  }
}
