# GSU Backend

This project serves as the backend for the GSU project.

The project utilises the following tech stack:

1. NodeJS
2. Typescript
3. MongoDB

## Installation

Node version: 18.19.0

To install the the dependencies, we need to do `npm install`.

To run the project, we need to do `npm run dev`.

The API should be running on port 6546 OR you can visit the following URL - `http://localhost:6546/api/v1/tasks` to access the APIs in your local environment.

## Backend Requirements ( Node.js, TypeScript )

    - [x] Set up a RESTful API using Express.js.
    - [x] Implement CRUD operations for managing tasks.
    - [x] Use TypeScript for type safety and better code organization.
    - [x] Integrate a database (e.g., MongoDB, PostgreSQL, InMemory) for storing tasks.
    - [x] Implement validation and error handling for API requests.

## Bonus Tasks
    - [] Implement user authentication and authorization.
    - [] Add drag-and-drop functionality for reordering tasks.
    - [x] Implement search and filter functionality for tasks.
    - [] Integrate real-time updates using WebSockets or a similar technology.
    - [] Implement server-side rendering (SSR) for better performance and SEO.
    - [] Write unit tests and/or end-to-end tests for the application.

## Additional Info

I have added a bunch of things which I felt are essential -

1. API Versioning
2. Logging
3. Pagination for GET endpoints

Technique which I believe can be beneficial for our system when we hit a certain scale is

1. Caching ( either using redis / in-memory node cache )

## Application Screenshots / Videos

Sample Queries :

```bash
GET     http://localhost:6546/api/v1/tasks/
GET     http://localhost:6546/api/v1/tasks/:id
POST    http://localhost:6546/api/v1/tasks/
PUT     http://localhost:6546/api/v1/tasks/:id
DELETE  http://localhost:6546/api/v1/tasks/:id
GET     http://localhost:6546/api/v1/tasks/filter?status=complete
GET     http://localhost:6546/api/v1/tasks/search?q=test
```

Sample Task Body

```javascript

{
    "title": "another task to add",
    "description": "yet another task to add",
    "status": "todo"
}

```

#### Get all tasks

<img width="1392" alt="Screenshot 2024-08-22 at 9 24 04 PM" src="https://github.com/user-attachments/assets/1fd0aaf1-638e-4589-b06c-4413dcd9532c">

#### Add a task
<img width="1397" alt="Screenshot 2024-08-22 at 9 24 52 PM" src="https://github.com/user-attachments/assets/c149bbac-9c90-417c-85ee-84faac192444">

#### Search for a task
<img width="1395" alt="Screenshot 2024-08-22 at 9 27 49 PM" src="https://github.com/user-attachments/assets/df75619b-e087-4a20-babd-b69c58a6b839">

#### Filter for a task by status
<img width="1392" alt="Screenshot 2024-08-22 at 9 27 26 PM" src="https://github.com/user-attachments/assets/aad3b35a-f368-4e72-9812-b71e67496546">

#### Delete a task
<img width="1391" alt="Screenshot 2024-08-22 at 9 25 35 PM" src="https://github.com/user-attachments/assets/50a4f5e2-1052-430b-a30e-fb28cc19e891">

#### Update a task
<img width="1387" alt="Screenshot 2024-08-22 at 9 25 21 PM" src="https://github.com/user-attachments/assets/4a7167e9-3453-47b4-a594-41c0794f1695">

### Error Handling
<img width="1031" alt="Screenshot 2024-08-22 at 9 36 21 PM" src="https://github.com/user-attachments/assets/7802a1fe-49b8-45d5-ad5f-df87cd1cf6fa">

