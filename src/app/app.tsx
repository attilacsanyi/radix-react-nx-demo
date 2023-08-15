import { RadixNetwork } from '@radixdlt/babylon-gateway-api-sdk';
import {
  RadixDappToolkit
} from '@radixdlt/radix-dapp-toolkit';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'radix-connect-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

export const App = () => {

  const rdt = RadixDappToolkit({
    dAppDefinitionAddress:
      'account_tdx_d_12x5xkt4nzdqsym80c6sn32rx63efgyfcyj2ly7fcj0qcy85mh98d3p',
    networkId: RadixNetwork.RCnetV2,
  });

  return (
    <div className='header'>
      <h1>Radix React Nx Demo</h1>
      <radix-connect-button />
    </div>
  );
};

export default App;
