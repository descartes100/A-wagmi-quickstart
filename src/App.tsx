import { useAccount } from "wagmi";

import { Account, Connect, NetworkSwitcher, SignMessage } from "./components";

export function App() {
  const { data } = useAccount();

  return (
    <>
      <Connect />

      {data?.address && (
        <>
          <Account />
          <NetworkSwitcher />
          <SignMessage />
        </>
      )}
    </>
  );
}
