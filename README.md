# Jsramverk
Starter project for DV1677 JSRamverk

## Application functionality

To get the application up and running, we began by cloning the repository from GitHub and navigating into the project directory. After that, we installed the necessary dependencies using `npm install`, which set up the environment as specified in the `package.json` file.

We then created a `.env` file in the root directory to configure environment variables, particularly setting the `PORT` variable to `3000` to ensure the application listens on the correct port.

Once the environment was configured, we addressed security vulnerabilities in the dependencies by running `npm audit` to identify potential issues and used `npm audit fix` to automatically resolve most of them.

To launch the application, we ran `npm start`, which starts the server on the specified port and confirms that it is running correctly by displaying a message indicating the port number.

Throughout the project, we adhered to the GitHub Flow methodology, which involved:

- Creating branches for new features or bug fixes.
- Committing and pushing changes frequently.
- Opening Pull Requests to merge changes into the main branch after thorough review.

This approach ensured that we maintained a stable and secure codebase while enabling effective collaboration within the team.
