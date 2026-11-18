# Student Task Manager

## Project Description

Student Task Manager is a web application designed to help college students organize their assignments and manage deadlines. The main goal is to help students stay organized and keep track of their schoolwork.

This project was created as part of my backend development course. It allows me to practice software development, GitHub, Docker, Agile project management, and cloud deployment.

## MVP Features

The first working version of Student Task Manager includes:

- Add new assignments.
- View saved assignments.
- Set due dates for assignments.
- Mark assignments as completed.
- Delete assignments.
- Save assignments using SQLite.

The application has a simple web interface that makes it easy to manage assignments.

## Technology Stack

- **Frontend:** HTML, CSS, and JavaScript
- **Backend:** Node.js and Express
- **Database:** SQLite
- **Containerization:** Docker
- **Version Control:** Git and GitHub
- **Project Management:** Jira
- **Documentation:** Confluence
- **Cloud Platform:** Google Cloud Run (deployment planned)
- **CI/CD:** GitHub Actions (planned for a future unit)

React was included in the original project plan, but the MVP uses basic HTML, CSS, and JavaScript to focus on the core features first.

## Getting Started

### Run Locally

1. Clone the GitHub repository.
2. Open the project folder.
3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

5. Open the application in your browser:

http://localhost:3000

### Run with Docker

Build the Docker image:

```bash
docker build -t student-task-manager .
```

Run the container:

```bash
docker run --rm -p 3000:8080 student-task-manager
```

Open the application at:

http://localhost:3000

## Testing

During Unit 12, I tested the application locally using Node.js and inside a Docker container.

I successfully tested the following features:

- Adding assignments.
- Viewing saved assignments.
- Marking assignments as completed.
- Deleting assignments.
- Running the application with Docker.

I also fixed a Docker problem related to SQLite by updating the `.dockerignore` file.

## AI Tool Usage

I used ChatGPT to help me develop the Student Task Manager MVP.

ChatGPT helped me with:

- Creating the Node.js and Express server.
- Building the basic web interface.
- Writing the SQLite database code.
- Creating the Dockerfile.
- Troubleshooting Docker errors.
- Understanding Git commands and pull requests.
- Improving project documentation.

I reviewed the instructions, tested the application, and worked through errors during development.

Using AI helped me understand the development process and solve technical problems more efficiently.

## GitHub Workflow

I used GitHub to manage the project code and track development progress.

I created a feature branch named `feature/mvp-task-manager` to develop the application.

I made descriptive commits, including:

- Add Node.js project configuration.
- Add Express server and task management API.
- Add task management web interface.
- Connect frontend interface to Express server.
- Add Dockerfile for application containerization.
- Fix Docker configuration and add dependency lockfile.

After testing the application, I created a pull request and merged the feature branch into `main`.

## Project Progress

### Unit 11: Planning

- Created the GitHub repository.
- Created the Jira project.
- Organized the project plan and tasks.
- Created the Confluence documentation.

### Unit 12: MVP Development

- Created the backend server.
- Added SQLite database support.
- Built a basic web interface.
- Implemented the main task management features.
- Tested the application locally.
- Built and tested the Docker container.
- Used a feature branch and pull request.

### Next Steps

- Attempt deployment to Google Cloud Run.
- Improve the user interface.
- Add editing functionality to the web interface.
- Add automated tests.
- Implement CI/CD using GitHub Actions.
- Continue updating Jira and Confluence.

## Project Links

**GitHub Repository:**
https://github.com/alejandro21-24/student-task-manager

**Jira Project:**
https://alejandroquiles42.atlassian.net/jira/software/projects/STM/boards/3/backlog

**Confluence Documentation:**
https://alejandroquiles42.atlassian.net/wiki/x/jgEB

## Project Goal

The goal of Student Task Manager is to create a useful application for students while learning professional software development practices.

This project has helped me gain experience with backend development, databases, Docker, GitHub, AI-assisted programming, and Agile project management.
