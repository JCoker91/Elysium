import { MantineProvider as MantineProviderBase } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProviderBase theme={theme}>
      <Notifications />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProviderBase>
  );
}
