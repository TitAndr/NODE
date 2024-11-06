# Express-Redis-Mongo Project

## Description
This project sets up an Express.js application with Redis, Redis Commander, and MongoDB using Docker Compose. The MongoDB instance has two collections: users and user_cars, where each user can have multiple cars (one-to-many relationship).

## Setup and Run

1. **Clone the repository** or download the project files.
2. **Run the following command to build and start the project:**
    ```
    docker-compose up --build
    ```
3. The application will be available on:
   - Express app: [http://localhost:3000](http://localhost:3000)
   - Redis Commander: [http://localhost:8081](http://localhost:8081)
4. To stop the application:
    ```
    docker-compose down
    ```

## Available API Endpoints

### Create a Car for a User
**POST** /car

- Request Body:
  ```json
  {
    "model": "Tesla",
    "color": "Green",
    "userId": "USER_OBJECT_ID"
  }
  ```

### Get Cars for a User
**GET** /user/:id/cars

- Response:
  ```json
  [
    {
      "model": "Tesla",
      "color": "Green",
      "userId": "USER_OBJECT_ID"
    }
  ]
  ```
