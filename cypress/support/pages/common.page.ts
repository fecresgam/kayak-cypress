export class CommonPage {
  button: { accept: string };
  label: {
    cookiesModalTittle: string;
    cookiesModalDescription: string;
    privacyPolicyLink: string;
  };
  constructor() {
    (this.button = {
      accept:
        ":nth-child(1) > .RxNS > .RxNS-button-container > .RxNS-button-content",
    }),
      (this.label = {
        cookiesModalTittle: "Nos importa tu privacidad",
        cookiesModalDescription:
          "Usamos cookies técnicas, analíticas y de marketing para que te resulte más fácil iniciar sesión y reanudar tus búsquedas sin tener que empezar desde cero.",
        privacyPolicyLink: "Política de privacidad",
      });
  }
}
