# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## DockerHub images :
  docker pull akramsarfraj/course-client:1
## Docker-compose.yaml 

services:
    db:
      image: postgres:15
      environment: 
        - POSTGRES_PASSWORD=root
        - POSTGRES_USER=postgres
        - POSTGRES_DB=postgres
      ports:
        - 5432:5432
      volumes:
        - postgres-data:/var/lib/pgsql
      restart: always

    springApp:
      image: akramsarfraj/course-api:1
      ports: 
        - 8080:8080

    reactApp:
      image: akramsarfraj/course-client:1
      ports:
        - 3000:3000
volumes:
  postgres-data:
    driver: local

