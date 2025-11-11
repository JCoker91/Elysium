"use client";

import { Flip } from "@gfazioli/mantine-flip";
import {
  BackgroundImage,
  Box,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ClassBadge, { CharacterClass } from "./ClassBadge";

export interface CharacterCardProps {
  imgSrc: string;
  name: string;
  playerName: string;
  description: string;
  characterClasses: string[];
}

export default function CharacterCard({
  props,
}: {
  props: CharacterCardProps;
}) {
  const [flipped, { close, open }] = useDisclosure(false);
  const characterClassList: CharacterClass[] =
    props.characterClasses as CharacterClass[];
  function FrontOfCard() {
    return (
      <BackgroundImage
        onClick={() => open()}
        src={props.imgSrc}
        radius="md"
        h={400}
        style={{
          backdropFilter: "blur(4px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "16px",
          color: "white",
        }}
      >
        <Box
          h={"40%"}
          style={{
            padding: "8px",
            borderRadius: "8px",
            zIndex: 2,
          }}
        >
          <Text fw={500} fz="lg" c={"white"}>
            {props.name}
          </Text>
          <Text size="sm" c={"dimmed"}>
            {props.description}
          </Text>
        </Box>

        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%)"
          opacity={0.7}
          fixed={true}
          zIndex={0}
          radius={"md"}
        />
      </BackgroundImage>
    );
  }

  function BackOfCard() {
    return (
      <BackgroundImage
        onClick={() => close()}
        src={"/Elysium/images/backgroundImage.png"}
        radius="md"
        h={400}
        style={{
          backdropFilter: "blur(4px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "16px",
          color: "white",
        }}
      >
        <Stack justify="space-between" h={"100%"} style={{ zIndex: 2 }}>
          <Box>
            <Text fw={500} fz="md" c={"white"}>
              Player: {props.playerName}
            </Text>
            <Text fz="xs" c={"white"}>
              Age: {18}
            </Text>
          </Box>
          <SimpleGrid cols={3} spacing="xs">
            {characterClassList.map((charClass, index) => (
              <ClassBadge key={index} characterClass={charClass} />
            ))}
          </SimpleGrid>
        </Stack>

        <Overlay opacity={0.7} fixed={true} zIndex={1} radius={"md"} />
      </BackgroundImage>
    );
  }
  return (
    <Flip flipped={flipped} style={{ cursor: "pointer" }}>
      <FrontOfCard />
      <BackOfCard />
    </Flip>
  );
}
