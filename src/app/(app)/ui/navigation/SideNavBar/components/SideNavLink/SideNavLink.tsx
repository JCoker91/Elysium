import { Box, NavLink, ThemeIcon } from "@mantine/core";

export interface SideNavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function SideNavLink({ label, href, icon }: SideNavLinkProps) {
  return (
    <NavLink
      leftSection={
        <Box>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
        </Box>
      }
      label={label}
      // If in production mode, link to /Elysium/...
      href={process.env.NODE_ENV === "development" ? href : `${href}`}
    />
  );
}
