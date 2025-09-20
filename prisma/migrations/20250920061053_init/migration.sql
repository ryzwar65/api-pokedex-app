-- CreateTable
CREATE TABLE "GroupPokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pokemons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Abilities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "pokemonID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Abilities_pokemonID_fkey" FOREIGN KEY ("pokemonID") REFERENCES "Pokemons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "base_stat" INTEGER NOT NULL,
    "pokemonID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Stats_pokemonID_fkey" FOREIGN KEY ("pokemonID") REFERENCES "Pokemons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pokemonID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Types_pokemonID_fkey" FOREIGN KEY ("pokemonID") REFERENCES "Pokemons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mark" BOOLEAN NOT NULL DEFAULT false,
    "pokemonID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Favorite_pokemonID_fkey" FOREIGN KEY ("pokemonID") REFERENCES "Pokemons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GroupPokemonToPokemons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_GroupPokemonToPokemons_A_fkey" FOREIGN KEY ("A") REFERENCES "GroupPokemon" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GroupPokemonToPokemons_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemons" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemons_name_key" ON "Pokemons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_pokemonID_key" ON "Favorite"("pokemonID");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupPokemonToPokemons_AB_unique" ON "_GroupPokemonToPokemons"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupPokemonToPokemons_B_index" ON "_GroupPokemonToPokemons"("B");
