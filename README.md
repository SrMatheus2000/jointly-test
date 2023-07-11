# React Posts Viewer

A simple React application built with TypeScript, Vite, Material-UI, and React-Query. It displays a list of posts fetched from an API and allows the user to select a post to view its details and associated comments.

## Prerequisites

- Node.js and pnpm
- An understanding of TypeScript and React

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/SrMatheus2000/jointly-test.git
cd repository
```

Then, install the dependencies:

```bash
pnpm install
```

To start the development server:

```bash
pnpm run dev
```

Navigate to http://localhost:3000 to view the application.

## Application Structure

- `src/`: Contains the source code
    - `components/`: Contains reusable React components
    - `hooks/`: Contains custom React hooks, mostly for data fetching
    - `App.tsx`: The main entry point for the application

## API

The application uses the JSONPlaceholder API, specifically the `/posts` and `/posts/:id/comments` endpoints. See the [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/) for more information.

## Features

- View a list of posts
- Select a post to view its details and comments

## Libraries/Frameworks

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org): A superset of JavaScript that adds types
- [Vite](https://vitejs.dev): A build tool that aims to provide a faster and leaner development experience for modern web projects
- [Material-UI](https://mui.com): A popular React UI framework
- [React-Query](https://react-query.tanstack.com): A library for fetching, caching, synchronizing and updating server state

## Testing

The application uses [Jest](https://jestjs.io) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for unit and integration testing.

To run the tests:

```bash
pnpm test
```

## Author

Matheus Wandscheer

## License

This project is [MIT licensed](./LICENSE).
