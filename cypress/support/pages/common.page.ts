export class CommonPage {
  button: { accept: string };
  label: {
    cookiesModalTittle: string;
    cookiesModalDescription: string;
    privacyPolicyLink: string;
  };
  mainMenu: {
    flights: string;
    stays: string;
    cars: string;
    packages: string;
    trainBus: string;
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
      }),
      (this.mainMenu = {
        flights: ":nth-child(3) > .HtHs > .HtHs-nav-list > :nth-child(1)",
        stays: ":nth-child(3) > .HtHs > .HtHs-nav-list > :nth-child(2)",
        cars: ":nth-child(3) > .HtHs > .HtHs-nav-list > :nth-child(3)",
        packages: ":nth-child(3) > .HtHs > .HtHs-nav-list > :nth-child(4)",
        trainBus: ":nth-child(3) > .HtHs > .HtHs-nav-list > :nth-child(5)",
      });
  }
}
