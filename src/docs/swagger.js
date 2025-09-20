import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "Pokemon API",
      version: "1.0.0",
      description: "A comprehensive Pokemon API for managing Pokemon data, favorites, and groups. Built with Express.js, Prisma, and SQLite.",
      contact: {
        name: "Riyanwar Setiadi",
        email: "your.email@example.com"
      },
    },
    servers: [
      {
        url: "http://localhost:5050/api",
        description: "Development server"
      },
    ],
    components: {
      schemas: {
        Pokemon: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Unique identifier for the Pokemon"
            },
            name: {
              type: "string",
              description: "Name of the Pokemon"
            },
            image: {
              type: "string",
              description: "URL of the Pokemon image"
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Creation timestamp"
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Last update timestamp"
            },
            abilities: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Ability"
              }
            },
            stats: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Stat"
              }
            },
            types: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Type"
              }
            },
            favorite: {
              $ref: "#/components/schemas/Favorite"
            }
          }
        },
        Ability: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            name: {
              type: "string"
            },
            description: {
              type: "string"
            },
            short_description: {
              type: "string"
            },
            pokemonID: {
              type: "integer"
            }
          }
        },
        Stat: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            name: {
              type: "string"
            },
            base_stat: {
              type: "integer"
            },
            pokemonID: {
              type: "integer"
            }
          }
        },
        Type: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            name: {
              type: "string"
            },
            image: {
              type: "string"
            },
            pokemonID: {
              type: "integer"
            }
          }
        },
        Favorite: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            mark: {
              type: "boolean",
              description: "Whether the Pokemon is marked as favorite"
            },
            pokemonID: {
              type: "integer"
            },
            createdAt: {
              type: "string",
              format: "date-time"
            },
            updatedAt: {
              type: "string",
              format: "date-time"
            }
          }
        },
        GroupPokemon: {
          type: "object",
          properties: {
            id: {
              type: "integer"
            },
            name: {
              type: "string",
              description: "Name of the Pokemon group"
            },
            createdAt: {
              type: "string",
              format: "date-time"
            },
            updatedAt: {
              type: "string",
              format: "date-time"
            },
            pokemons: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Pokemon"
              }
            }
          }
        },
        Error: {
          type: "object",
          properties: {
            error: {
              type: "string",
              description: "Error message"
            },
            status: {
              type: "integer",
              description: "HTTP status code"
            }
          }
        },
        CreateFavoriteRequest: {
          type: "object",
          required: ["pokemonID"],
          properties: {
            pokemonID: {
              type: "integer",
              description: "ID of the Pokemon to mark as favorite"
            }
          }
        },
        UpdateFavoriteRequest: {
          type: "object",
          required: ["id", "mark"],
          properties: {
            id: {
              type: "integer",
              description: "ID of the favorite record"
            },
            mark: {
              type: "boolean",
              description: "New favorite status"
            }
          }
        }
      }
    }
  },
  apis: [
    "./src/routes/*.js", 
    "./src/routes/**/*.js", 
    "./src/server.js"
  ], // Path to your API docs
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export { swaggerSpec, swaggerUi };
