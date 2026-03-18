# Country Finder

Country Finder is a modern web application designed to search, manage, and display country-related data. It is built using a Java Spring Boot backend and a React frontend, providing a seamless and efficient user experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display country data in a tabular format.
- Search and filter countries.
- Add, edit, and delete country information.
- Responsive design for optimal user experience on all devices.

## Tech Stack

### Backend:
- Java
- Spring Boot
- Maven

### Frontend:
- React
- Vite
- CSS Modules

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Java 17 or higher
- Maven
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/country-finder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd country-finder
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

#### Backend:

1. Navigate to the backend directory:
   ```bash
   cd BE
   ```

2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

#### Frontend:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local development URL (e.g., `http://localhost:5173`).

## Project Structure

### Backend:
- `src/main/java`: Contains the Java source code for the backend.
- `src/main/resources`: Contains configuration files and templates.
- `pom.xml`: Maven configuration file.

### Frontend:
- `src`: Contains the React source code.
- `public`: Contains static assets.
- `vite.config.js`: Vite configuration file.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
