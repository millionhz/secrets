# Secrets
![Key](./public/images/favicon.ico) 

A site to post your secrets on.

*A showcase for user authentication on express backend.*

## Modules Used For Authentication

- mongoose - database ORM
- bcrypt - password hashing
- connect-ensure-login - simple middleware for checking auth status
- connect-mongo - mongoStore for sessions
- express-session - manage user sessions
- passport - manage authentication
- passport-local - strategy for passport authentication


## Installation

### Clone the repository

```bash
git clone https://github.com/millionhz/secrets.git
```

### Set environment variables

The app requires:
- PORT (port to run the server on)
- DB (database url)
- NODE_ENV
- SESSION_SECRET

For **development**, nodemon config file can be used to set the environment variables.
Sample `nodemon.json`:

```json
{
    "ext": "js,json",
    "env": {
        "PORT": 3000,
        "DB": "mongodb://127.0.0.1:27017/secrets",
        "NODE_ENV": "development",
        "SESSION_SECRET": "p@ss50Rd321"
    }
}
```

### Install dependencies

```
npm install
```

Note: If NODE_ENV is set to **production**, `npm` will not install devDependencies.

### Run the app

Production:
```
npm start
```

Development:
```
npm run dev
```