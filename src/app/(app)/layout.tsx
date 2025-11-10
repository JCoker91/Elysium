import { AppShell, AppShellMain, AppShellNavbar } from "@mantine/core";
import SideNavBar from "./ui/navigation/SideNavBar/SideNavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell navbar={{ width: 240, breakpoint: "sm" }} padding="md">
      <AppShellNavbar>
        <SideNavBar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
