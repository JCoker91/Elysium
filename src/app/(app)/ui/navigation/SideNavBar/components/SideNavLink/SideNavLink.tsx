import { Box, NavLink, ThemeIcon } from "@mantine/core";
import Link from "next/link";

export interface SideNavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function SideNavLink({ label, href, icon }: SideNavLinkProps) {
  return (
    <NavLink
      component={Link}
      leftSection={
        <Box>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
        </Box>
      }
      label={label}
      href={href}
    />
  );
}
