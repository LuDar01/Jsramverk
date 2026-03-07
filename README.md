# Jsramverk - SSR Editor

Starter project for the JSRamverk course. This application is a Server-Side Rendered (SSR) document editor built with Express, EJS, and SQLite.

## Application Functionality & Setup

To get the application up and running, we followed these steps:

1. **Cloning & Installation**: We cloned the repository and ran `npm install` to download all necessary dependencies.
2. **Environment Configuration**: We created a `.env` file in the root directory and defined the `PORT` (e.g., `PORT=3000`) so the server knows where to listen.
3. **Database Initialization**: We used the provided reset script (`bash db/reset_db.bash`) to initialize the SQLite database and create the required `documents` table.
4. **Fixing Scripts**: We updated `package.json` to include a proper `start` script pointing to `app.mjs` and a `dev` script using `nodemon` for a smoother development workflow.
5. **Security**: We ran `npm audit` and `npm audit fix` to resolve high-level security vulnerabilities in the dependency tree.
6. **Template Logic**: We implemented safety checks in the EJS views to handle empty database states and added a `POST /update` route to allow editing of existing documents.

## Choice of Frontend Framework

For the upcoming parts of the course, we have decided to use **React**. 

Both team members have previous experience with React, which makes it a natural and efficient choice for us. Beyond our familiarity, React's component-based architecture and massive ecosystem make it an ideal tool for building a more complex, interactive editor. Its documentation is comprehensive, and the library's popularity ensures that we can find solutions to any technical hurdles we might encounter.

## Workflow

Throughout the project, we adhered to the **GitHub Flow** methodology:
- Creating descriptive branches for every feature (e.g., `specification`).
- Committing small, logical changes frequently.
- Using Pull Requests for code review before merging into the main branch.