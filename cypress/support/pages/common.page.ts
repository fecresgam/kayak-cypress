export class CommonPage {
  button: { accept: string };
  constructor() {
    this.button = {
      accept:
        ":nth-child(1) > .RxNS > .RxNS-button-container > .RxNS-button-content",
    };
  }
}
