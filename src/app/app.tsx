import { RadixNetwork } from '@radixdlt/babylon-gateway-api-sdk';
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit';
import Design from './design';
import Header from './layout/header';

export const App = () => {
  const rdt = RadixDappToolkit({
    dAppDefinitionAddress: import.meta.env.VITE_DAPP_DEFINITION_ADDRESS,
    networkId: RadixNetwork.RCnetV2,
  });

  rdt.buttonApi.setMode('dark');
  rdt.buttonApi.setTheme('black');

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-2 sm:gap-4">
        <Header />
        <Design />
      </div>
    </div>
  );
};

export default App;
