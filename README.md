# Pokemon API

A comprehensive Pokemon API backend built with Express.js, Prisma ORM, and SQLite database. This API provides endpoints to manage Pokemon data, favorites, and groups with full Swagger/OpenAPI documentation.

## Features

- 🔍 **Pokemon Management**: Search, retrieve, and manage Pokemon data
- ⭐ **Favorites System**: Mark/unmark Pokemon as favorites
- 👥 **Group System**: Create and manage Pokemon groups
- 📚 **Full API Documentation**: Interactive Swagger/OpenAPI 3.0 documentation
- 🗄️ **Database Integration**: SQLite database with Prisma ORM
- 🚀 **Modern JavaScript**: ES6+ modules with Babel transpilation
- 🛡️ **Security**: Helmet.js for security headers
- 🔄 **CORS Support**: Cross-origin resource sharing enabled

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite
- **ORM**: Prisma
- **Documentation**: Swagger/OpenAPI 3.0
- **Transpilation**: Babel
- **Security**: Helmet.js, CORS
- **Development**: Nodemon for hot reloading

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5050
   BASE_API='https://pokeapi.co/api/v2'
   DATABASE_URL="file:../src/database/pokemon.db"
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The server will start at `http://localhost:5050`

## API Documentation

### Interactive Documentation
Visit `http://localhost:5050/api/docs` to access the interactive Swagger UI documentation.

### Base URL
```
http://localhost:5050/api
```

## Swagger Documents
```
http://localhost:5050/api/docs
```

## API Endpoints

### Pokemon Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/pokemon` | Get all Pokemon with pagination |
| `GET` | `/pokemon/:name` | Get Pokemon by name |
| `GET` | `/pokemon/search` | Search Pokemon by name |
| `GET` | `/pokemon/types` | Get all Pokemon types |

### Favorites Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/favorite` | Get all favorite Pokemon |
| `POST` | `/favorite` | Add Pokemon to favorites |
| `GET` | `/favorite/:id` | Get favorite Pokemon by ID |
| `POST` | `/favorite/update` | Update favorite status |

### Group Pokemon Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/group-pokemon` | Get all Pokemon groups |
| `POST` | `/group-pokemon` | Create a new Pokemon group |
| `DELETE` | `/group-pokemon/:id` | Delete a Pokemon group |

## Database Schema

### Models

#### Pokemon
```prisma
model Pokemons {
  id           Int            @id @default(autoincrement())
  name         String         @unique
  image        String
  createdAt    DateTime       @default(now())
  updatedAt    DateTime       @updatedAt
  abilities    Abilities[]
  favorite     Favorite?
  groupPokemon GroupPokemon[]
  stats        Stats[]
  types        Types[]
}
```

#### Favorite
```prisma
model Favorite {
  id        Int      @id @default(autoincrement())
  mark      Boolean  @default(false)
  pokemonID Int      @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pokemons  Pokemons @relation(fields: [pokemonID], references: [id])
}
```

#### GroupPokemon
```prisma
model GroupPokemon {
  id        Int        @id @default(autoincrement())
  name      String
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  pokemons  Pokemons[] // many-to-many
}
```

#### Abilities
```prisma
model Abilities {
  id                Int      @id @default(autoincrement())
  name              String
  description       String
  short_description String
  pokemonID         Int
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  pokemons          Pokemons @relation(fields: [pokemonID], references: [id])
}
```

#### Stats
```prisma
model Stats {
  id        Int      @id @default(autoincrement())
  name      String
  base_stat Int
  pokemonID Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pokemons  Pokemons @relation(fields: [pokemonID], references: [id])
}
```

#### Types
```prisma
model Types {
  id        Int      @id @default(autoincrement())
  name      String
  image     String
  pokemonID Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  pokemons  Pokemons @relation(fields: [pokemonID], references: [id])
}
```

## Usage Examples

### Get All Pokemon
```bash
curl -X GET "http://localhost:5050/api/pokemon?page=1&limit=20"
```

### Search Pokemon
```bash
curl -X GET "http://localhost:5050/api/pokemon/search?name=pikachu"
```

### Add to Favorites
```bash
curl -X POST "http://localhost:5050/api/favorite" \
  -H "Content-Type: application/json" \
  -d '{"pokemonID": 1}'
```

### Create Pokemon Group
```bash
curl -X POST "http://localhost:5050/api/group-pokemon" \
  -H "Content-Type: application/json" \
  -d '{"name": "Fire Types", "pokemonIds": [1, 4, 37]}'
```

## Development

### Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run start` - Start production server
- `npm run build` - Build the project
- `npm test` - Run tests (when implemented)

### Project Structure

```
backend/
├── src/
│   ├── controllers/       # Route controllers
│   │   ├── favorites/
│   │   ├── group/
│   │   └── pokemon/
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   │   ├── favorites/
│   │   ├── group_pokemon/
│   │   └── pokemon/
│   ├── modules/          # Business logic modules
│   ├── helpers/          # Utility functions
│   ├── docs/             # Swagger documentation
│   └── server.js         # Main server file
├── prisma/
│   └── schema.prisma     # Database schema
├── package.json
└── README.md
```

### Database Management

#### Generate Prisma Client
```bash
npx prisma generate
```

#### Apply Database Changes
```bash
npx prisma db push
```

#### View Database
```bash
npx prisma studio
```

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

Error responses follow this format:
```json
{
  "error": "Error message",
  "status": 400
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Riyanwar Setiadi**

## Support

If you have any questions or need help, please create an issue in the repository or contact the maintainer.

---

**Happy coding! 🚀**