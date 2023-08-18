import { RadixNetwork } from '@radixdlt/babylon-gateway-api-sdk';
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'radix-connect-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const App = () => {
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_tdx_d_12x5xkt4nzdqsym80c6sn32rx63efgyfcyj2ly7fcj0qcy85mh98d3p',
    networkId: RadixNetwork.RCnetV2,
  });

  rdt.buttonApi.setMode('dark');
  rdt.buttonApi.setTheme('black');

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between [--radix-connect-button-width:100px] sm:[--radix-connect-button-width:138px]">
        <h1 className="font-bold text-primary">Radix React Nx Demo</h1>
        <radix-connect-button />
      </div>

      <section className="my-4">
        <h2>1. Colors</h2>
        <ul>
          <li className="text-primary">Primary</li>
        </ul>
      </section>

      <section className="my-4">
        <h2>2. Fonts</h2>
        <ul>
          <li className="font-thin">Outfit Thin</li>
          <li className="font-normal">Outfit Normal</li>
          <li className="font-bold">Outfit Bold</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
