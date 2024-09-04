
# Item Management System (IMS)

Simple IMS app. This is a monorepo containing both front and back projects.






## Tech Stack

**Frontend:** NextJS, MaterialUI, StyledComponents

**Backend:** NestJS, PostgreSQL, JWT, Swagger

**Others:** TypeScript


## Features

#### Users:
- Registration: new users can sign up by creating an account with a username and password.
- Login: existing users can log in to the system using their credentials.

#### Categories:
- Create: users can define new categories to classify items.
- Get: get all and by Name or ID.

#### Items:
- Create: users can add new items to the system with relevant details.
- Get: get items by ID or Category ID.
- Update: users can modify details of items already stored in the database.

#### Security:
- Authentication and Authorization: using JWT tokens.

#### Data Protection:
- Secure password storage is implemented using hashing algorithms via `bcrypt` library.


### 🛠️ Frontend still in development
Once the frontend interface is developed and integrated with the backend, users will be able to interact with these functionalities through a user-friendly dashboard.
## Installation

Install the app with yarn

```bash
  cd stock-monorepo-app
  yarn
```
    
## API Reference

#### API docs are available on `/docs`, thanks to Swagger.
