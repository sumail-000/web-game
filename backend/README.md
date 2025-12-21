# AdventureBlox Backend API

Backend server for AdventureBlox gaming platform built with Node.js, Express, TypeScript, and Prisma.

## 🚀 Tech Stack

- **Runtime:** Node.js v18+
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Real-time:** Socket.IO
- **Cache:** Redis (optional)
- **Auth:** JWT + Bcrypt

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   └── server.ts        # Main server file
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── .env                 # Environment variables
├── .env.example         # Environment template
├── tsconfig.json        # TypeScript config
├── nodemon.json         # Nodemon config
└── package.json         # Dependencies
```

## 🛠️ Installation

### Prerequisites
- Node.js v18 or higher
- npm or yarn
- PostgreSQL database (Supabase account)

### Setup Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
```bash
cp .env.example .env
```
Edit `.env` with your configuration (Supabase URL, JWT secrets, etc.)

3. **Initialize Prisma:**
```bash
npx prisma generate
```

4. **Run database migrations:**
```bash
npx prisma migrate dev
```

5. **Start development server:**
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📜 Available Scripts

```bash
npm run dev              # Start development server with hot reload
npm run build            # Build TypeScript to JavaScript
npm start                # Start production server
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio (database GUI)
npm run prisma:seed      # Seed database with test data
```

## 🔌 API Endpoints

### Health Check
```
GET /health
```
Returns server status and timestamp.

### API Root
```
GET /api/v1
```
Returns API information and version.

### Authentication (Coming Soon)
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
GET    /api/v1/auth/me
```

### Users (Coming Soon)
```
GET    /api/v1/users
GET    /api/v1/users/:id
PUT    /api/v1/users/:id
DELETE /api/v1/users/:id
```

### Friends (Coming Soon)
```
GET    /api/v1/friends
POST   /api/v1/friends/request
PUT    /api/v1/friends/accept/:id
DELETE /api/v1/friends/:id
```

### Groups (Coming Soon)
```
GET    /api/v1/groups
POST   /api/v1/groups
GET    /api/v1/groups/:id
PUT    /api/v1/groups/:id
DELETE /api/v1/groups/:id
```

### Games (Coming Soon)
```
GET    /api/v1/games
POST   /api/v1/games
GET    /api/v1/games/:id
PUT    /api/v1/games/:id
DELETE /api/v1/games/:id
```

## 🔌 Socket.IO Events

### Client → Server

```javascript
// Authenticate user
socket.emit('authenticate', { token: 'jwt-token' });

// Send chat message
socket.emit('chat:message', { 
  to: 'userId', 
  message: 'Hello!' 
});

// Update user status
socket.emit('user:status', { 
  status: 'online' | 'away' | 'offline' 
});
```

### Server → Client

```javascript
// Authentication response
socket.on('authenticated', (data) => {
  console.log('Authenticated:', data);
});

// Receive chat message
socket.on('chat:message', (data) => {
  console.log('New message:', data);
});

// User status update
socket.on('user:status', (data) => {
  console.log('User status changed:', data);
});
```

## 🗄️ Database Setup (Supabase)

1. **Create Supabase account:** https://supabase.com
2. **Create new project**
3. **Get connection string:** Settings → Database → Connection String
4. **Update `.env`:**
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres?schema=public"
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `JWT_REFRESH_SECRET` | Refresh token secret | Yes |
| `FRONTEND_URL` | Frontend URL for CORS | Yes |
| `REDIS_URL` | Redis connection string | No |

## 🧪 Testing

```bash
# Run tests (coming soon)
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚢 Deployment

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to platforms:
- **Railway:** Connect GitHub repo
- **Render:** Connect GitHub repo
- **Heroku:** `git push heroku main`
- **AWS/DigitalOcean:** Build and run with PM2

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### API Response Format
```typescript
// Success
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}

// Error
{
  "success": false,
  "error": "Error message",
  "details": { ... }
}
```

### Error Handling
- Use try-catch blocks
- Return proper HTTP status codes
- Log errors with context
- Never expose sensitive data

## 🔒 Security

- JWT authentication
- Password hashing with bcrypt
- Helmet.js for security headers
- CORS configuration
- Rate limiting (coming soon)
- Input validation
- SQL injection prevention (Prisma)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5000
npx kill-port 5000
```

### Prisma client errors
```bash
# Regenerate Prisma client
npx prisma generate
```

### Database connection issues
- Check DATABASE_URL in `.env`
- Verify Supabase project is active
- Check firewall/network settings

## 📚 Additional Resources

- [Express.js Docs](https://expressjs.com/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Socket.IO Docs](https://socket.io/docs/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Supabase Docs](https://supabase.com/docs)

## 👥 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🎮 AdventureBlox Team

Built with ❤️ for the gaming community