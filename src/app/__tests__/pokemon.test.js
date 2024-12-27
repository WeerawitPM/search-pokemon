// Mock data
const pokemons = [
  { name: "Bulbasaur", type: "Grass" },
  { name: "Charmander", type: "Fire" },
  { name: "Squirtle", type: "Water" },
];

describe("Pokemon Type Tests", () => {
  it("Bulbasaur should be of type Grass", () => {
    const bulbasaur = pokemons.find((p) => p.name === "Bulbasaur");
    expect(bulbasaur.type).toBe("Grass");
  });

  it("Charmander should be of type Fire", () => {
    const charmander = pokemons.find((p) => p.name === "Charmander");
    expect(charmander.type).toBe("Fire");
  });

  it("Squirtle should be of type Water", () => {
    const squirtle = pokemons.find((p) => p.name === "Squirtle");
    expect(squirtle.type).toBe("Water");
  });
});
