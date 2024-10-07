# Motoko Starter Template

A boilerplate for building decentralized applications (dApps) on the Internet Computer using Motoko and React.

## Features
- Pre-configured with DFX SDK 0.23.0
- Simple Motoko backend with example functions
- React frontend with basic routing
- Ready for deployment on the Internet Computer

## Getting Started

### Prerequisites
- Install [DFX SDK](https://internetcomputer.org/docs/current/developers-guide/install-dfx)
- Install [Node.js](https://nodejs.org/)

### Setup
1. Clone the repository
   ```bash
   git clone https://github.com/warminah/motoko-starter-template
   cd motoko-starter-template
   ```

2. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Deploy the backend
   ```bash
   cd backend
   dfx deploy
   ```

4. Run the frontend
   ```bash
   cd frontend
   npm run dev
   ```

### Built With
- [Motoko](https://motoko.org/)
- [React](https://reactjs.org/)
- [DFX SDK](https://internetcomputer.org/docs/current/developers-guide/sdk)

## License
This project is licensed under the MIT Licenses
