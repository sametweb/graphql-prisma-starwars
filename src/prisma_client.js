const { prisma } = require("./generated/prisma-client");

async function main() {
  // Create a new character
  const newCharacter = await prisma.createCharacter({
    name: "Samet Mutevelli",
    species: "Human",
    affiliation: "REBEL_ALLIANCE",
    weapon: "lightsaber",
  });
  console.log(
    `Created new character: ${newCharacter.name} (ID: ${newCharacter.id})`
  );

  const allCharacters = await prisma.characters();
  console.log(allCharacters);
}

main().catch((e) => console.error(e));
