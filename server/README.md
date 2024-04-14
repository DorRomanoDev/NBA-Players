  # NBA Player Management App - Server


# Technical Design Overview

This project is a simple API built with NestJS to fetch player data from a third-party API. Here's a breakdown of the components and their functionalities:

## Component Breakdown

1. **PlayersController**: Handles incoming HTTP requests related to player data.
2. **PlayersService**: Responsible for interacting with the external API to fetch player data.
3. **ValidationPipe**: A custom NestJS pipe for input validation using class-validator and class-transformer.
4. **GetPlayerDto**: Data Transfer Object (DTO) defining the structure of the input for fetching player data.

## State Management Architecture

This project does not have a specific state management architecture like Redux or NgRx since it's primarily an API service. However, NestJS uses dependency injection and modules to manage application structure and state internally.

## API Interaction

The API interaction is handled through the `axios` library to make HTTP requests to the external API. The PlayersService class encapsulates this functionality, including setting headers for authorization.

## Complex Features

The primary complex feature implemented here is input validation using the ValidationPipe. It ensures that incoming data adheres to the specified format before processing it further.

# Detailed Code Explanation

Let's dive into each file's code and explain its functionality:

---

### `players.controller.ts`
#### Explanation:
- Implements a service to interact with the external API using axios.
- Configures API base URL and authorization headers from environment variables.
- Provides a method getPlayer to fetch player data based on input parameters.

### `validation.pipe.ts`
#### Explanation:
- Implements a custom NestJS pipe for input validation using class-validator and class-transformer.
- Validates incoming data based on the specified DTO (GetPlayerDto).
- Throws a BadRequestException if validation fails, providing detailed error messages.

### `players.dto.ts`
#### Explanation:
- Defines the Data Transfer Object (DTO) structure for input validation in the PlayersController.
- Uses class-validator decorators to specify validation rules for each property.


### `main.ts`
#### Explanation:
- Initializes the NestJS application by creating the Nest application instance.
- Loads environment variables from a .env file using dotenv.
- Starts the application on port 3000 with CORS enabled.


# Unit Test Files
- players.controller.spec.ts: Contains unit tests for the PlayersController.
- players.service.spec.ts: Contains unit tests for the PlayersService.


# Project Setup and Installation Guide

## Prerequisites

Before starting, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git (optional, but recommended for cloning repositories)

## Setup Instructions

### 1. **Install Dependencies:**

Run the following command to install all project dependencies:

   ```bash
   npm install
   ```

### 2. **Environment Variables:**

Create a .env file in the root directory of your project. Add the following environment variables to this file:

   ```bash
ACCESS_TOKEN=your_access_token_here
BALLDONTLIE_BASE_URL=base_url_here
```
Replace your_access_token_here with your actual access token for the API you are using, and base_url_here with the base URL of the API.

### 3. **Running the Application:**
Run the following command to start the application:

   ```bash
    npm start
