import { LightningElement, wire, api } from 'lwc';

import {
  subscribe,
  unsubscribe,
  MessageContext,
  APPLICATION_SCOPE
} from 'lightning/messageService';
import SMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class Subscribe extends LightningElement {
  value;

  // subscribeの戻り値を格納する用
  subscription;

  @wire(MessageContext)
  messageContext;

  // subscribe()を実行し、SampleMessageを購読します。
  connectedCallback() {
    this.subscribeToMessageChannel();
  }

  // unsubscribeメソッドで購読状態を解除できます。
  disconnectedCallback() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  subscribeToMessageChannel() {
    this.subscription = subscribe(
      this.messageContext,
      SMC,
      (message) => {
        this.value = message.value;
      },
      { scope: APPLICATION_SCOPE }
    );
  }
}
