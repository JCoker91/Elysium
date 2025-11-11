import { SimpleGrid, Text, Title } from "@mantine/core";
import CharacterCard, { CharacterCardProps } from "./components/CharacterCard";

export default function CharactersPage() {
  const characters: CharacterCardProps[] = [
    {
      imgSrc: "/Elysium/images/character1.png",
      name: 'Cassie "Crash" Decker',
      description:
        "Skater punk, Bard. Loyal glue of the group, with a grunge flannel style and a lute in Elysium.",
      characterClasses: ["Bard", "Warlock", "Fighter", "Cleric", "Rogue"],
      playerName: "Tyler Heitkamp",
    },
    {
      imgSrc: "/Elysium/images/character2.png",
      name: "Nico Petrov",
      description:
        "Brooding 90s teen and self-proclaimed music snob. The quiet observer of the group, often lost in his thoughts and mixtapes.",
      characterClasses: ["Rogue", "Ranger"],
      playerName: "Matthew Crews",
    },
    {
      imgSrc: "/Elysium/images/character3.png",
      name: "Owen Scott",
      description:
        "Earnest and curious photographer of the group. A classic 90s high school kid with a vintage camera always in hand, capturing moments no one else notices.",
      characterClasses: ["Paladin", "Cleric", "Wizard"],
      playerName: "Patrick Noriel",
    },
  ];

  return (
    <>
      <Title order={2} ta={"center"} mt="md">
        Characters Page
      </Title>

      <Text ta={"center"} mb="md">
        Meet the diverse characters of our world.
      </Text>

      <SimpleGrid cols={6}>
        {characters.map((character, index) => (
          <CharacterCard key={index} props={character} />
        ))}
      </SimpleGrid>
    </>
  );
}
