# Todo list App 

The todo list app is developed using FreeSchema Frontend tools and libraries. The reference has been taken from "https://documentation.freeschema.com/" regarding the how the application has to be designed from the architecture layer.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Todo app is designed with data management in mind, leveraging the `mftsccs-browser` framework to simplify the handling of both frontend and backend data operations. This project enables the development of dynamic applications with seamless data interactions and is suited for building to-do lists.

## Features

- **Modular Design:** Organized structure for scalable and reusable components.
- **TypeScript Support:** Full support for type-safe development.
- **Vite-Powered:** Fast build and development environment using Vite.
- **Data Synchronization:** Integrates `mftsccs-browser` for data management and synchronization.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niraj-khatri-chhetri/Freeschema-Frontend
   cd Freeschema-Frontend
2. Install dependencies:
   npm install

## Running the application
  For local development: 
npm run dev

## Project Structure
FREESCHEMA-FRONTEND
├── node_modules             # Contains all npm packages and dependencies.
├── public                   # Directory for public assets like images, fonts, etc., that are accessible from the root URL.
├── src                      # The main source directory where all the app code resides.
│   ├── app                  # Contains core application files and utilities.
│   │   ├── default          # Houses base classes and utilities shared across the application.
│   │   │   ├── BaseObserver.ts         # Base class for implementing observer pattern.
│   │   │   ├── BaseWidget.ts           # Base class for widgets, managing state and UI updates.
│   │   │   ├── mainView.class.ts       # Main view class, likely serves as the entry point for initializing app views.
│   │   │   └── StatefulWidget.ts       # Base class for stateful widgets, managing component states.
│   │   ├── environments                # Environment-specific configurations.
│   │   │   └── environment.dev.ts      # Development environment configurations, such as API endpoints and feature flags.
│   │   ├── interfaces                  # TypeScript interfaces to define data structures and types.
│   │   │   └── IUser.interface.ts      # Interface for user-related data, defining the shape of user objects.
│   ├── pages                           # Contains individual pages and views within the app.
│   │   ├── example                     # Example page or folder for testing components 
│   │   ├── home                        # Home page files 
│   │   └── noPageFound                 # 404 or error page for handling unmatched routes.
│   ├── todolist                        # Widgets and utilities related to the Todo List feature.
│   │   ├── create.todolist.ts          # Class widget to handle creating new todo list items.
│   │   ├── list.todolist.ts            # Class widget to manage and display the list of todos.
│   │   ├── sidebar.ts                  # Sidebar component for navigation or additional options.
│   │   ├── todo.style.css              # CSS file containing styles specific to the Todo List components.
│   │   └── wrapper.todolist.ts         # Wrapper component that might encapsulate the todo list for layout or additional logic.
│   ├── user                            # Contains user-related functionality and components
│   ├── routes                          # Defines application routing configurations.
│   │   └── main.ts                     # Main routing file defining app routes for navigation.
├── style.css               # Global stylesheet for general application styles.
├── .gitignore              # Specifies files and directories that should be ignored by Git.
├── index.html              # The main HTML file for the application entry point.
├── package-lock.json       # Automatically generated file that locks the dependency versions.
├── package.json            # Defines project metadata, scripts, and dependencies.
├── tsconfig.json           # TypeScript configuration file for compiler options.
└── vite.config.js          # Configuration file for Vite, defining how the app is built and served.


