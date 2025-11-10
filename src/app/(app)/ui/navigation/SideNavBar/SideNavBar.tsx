"use client";
import ThemeToggleButton from "@/app/(app)/ui/navigation/SideNavBar/components/ThemeToggleButton/ThemeToggleButton";
import { Divider, Group, ScrollArea, Title } from "@mantine/core";
import { IconBook, IconHome, IconUsers } from "@tabler/icons-react";
import SideNavLink from "./components/SideNavLink/SideNavLink";

export default function SideNavBar() {
  return (
    <nav
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div>
          <Group justify="center">
            <Title order={2}>Elysium</Title>
          </Group>
        </div>
        <Divider my="sm" />
        <ScrollArea scrollbars="y">
          <SideNavLink label="Home" href="/" icon={<IconHome size={16} />} />
          <SideNavLink
            label="Characters"
            href="/characters"
            icon={<IconUsers size={16} />}
          />
          <SideNavLink
            label="Journal"
            href="/journal"
            icon={<IconBook size={16} />}
          />
        </ScrollArea>
        <Divider my="sm" />
      </div>
      <div style={{ marginBottom: 10, padding: 10 }}>
        <ThemeToggleButton />
      </div>
    </nav>
  );
}
