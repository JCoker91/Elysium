import { MantineProvider } from "./MantineProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}
