"use client";

import { Badge, useMantineColorScheme } from "@mantine/core";

export enum CharacterClass {
  Wizard = "Wizard",
  Fighter = "Fighter",
  Rogue = "Rogue",
  Cleric = "Cleric",
  Bard = "Bard",
  Warlock = "Warlock",
  Ranger = "Ranger",
  Paladin = "Paladin",
}

export default function ClassBadge({
  characterClass,
}: {
  characterClass: CharacterClass;
}) {
  const { colorScheme } = useMantineColorScheme();
  switch (characterClass) {
    case CharacterClass.Wizard:
      return (
        <Badge
          color="blue"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Wizard
        </Badge>
      );
    case CharacterClass.Fighter:
      return (
        <Badge
          color="red"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Fighter
        </Badge>
      );
    case CharacterClass.Rogue:
      return (
        <Badge
          color="gray"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Rogue
        </Badge>
      );
    case CharacterClass.Cleric:
      return (
        <Badge
          color="white"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Cleric
        </Badge>
      );
    case CharacterClass.Bard:
      return (
        <Badge
          color="pink"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Bard
        </Badge>
      );
    case CharacterClass.Warlock:
      return (
        <Badge
          color="purple"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Warlock
        </Badge>
      );
    case CharacterClass.Ranger:
      return (
        <Badge
          color="green"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Ranger
        </Badge>
      );
    case CharacterClass.Paladin:
      return (
        <Badge
          color="yellow"
          variant={colorScheme === "dark" ? "light" : "filled"}
          size="sm"
        >
          Paladin
        </Badge>
      );
  }
}
