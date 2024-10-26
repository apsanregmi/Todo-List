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
├── src
│   ├── app
│   │   ├── default                             # Core application utilities
│   │   ├── environments                        # Environment-specific configurations
│   │   ├── interfaces                          # TypeScript interfaces for data structures
│   │   └── todolist                            # Main Todo List feature
│   │       ├── create.todolist.ts              # Handles task creation form and submission
│   │       ├── list.todolist.ts                 # Manages and displays the list of tasks
│   │       ├── sidebar.ts                     # Sidebar for navigation or quick options
│   │       ├── todo.style.css                 # Styling for Todo List components
│   │       └── wrapper.todolist.ts            # Wraps and organizes Todo List components
│   ├── routes
│   │   └── main.ts                        # Defines application routing for navigation
│   └── style.css                          # Global styles for the app
├── index.html                             # Main HTML file for the application entry point
├── .gitignore                    # Files and directories to ignore in Git
├── package.json                  # Project metadata, scripts, and dependencies
├── tsconfig.json                 # TypeScript configuration
└── vite.config.js                # Vite configuration file for build/serve settings



