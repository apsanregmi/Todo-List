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
   ```
2. Install dependencies:
   npm install

## Running the application

For local development:
npm run dev

## Project Overview

This is a TypeScript-based frontend project using Vite and FreeSchema framework. The Todo List feature is organized within the src/todolist directory and contains all the files necessary for creating, viewing, editing, and managing tasks.

## Key Files in todolist Directory

1. create.todolist.ts : Handles the creation of new tasks.
2. list.todolist.ts : Manages and displays the list of existing tasks..
3. sidebar.ts :Contains the sidebar component, which could offer navigation or filtering options related to the Todo List.
4. todo.style.css : CSS file specifically for styling the Todo List components
5. wrapper.todolist.ts : A wrapper component that combines and organizes the create and list components.
