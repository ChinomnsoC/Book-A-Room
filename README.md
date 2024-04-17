# Book A Room

An accommodation booking website for fixed meetings throughout the year. The aim is to make it a user-friendly site that can take up a high surge in server load about 3-4 times a year.

## Set Up Book A Room

Clone the repository to a local device by running: `git clone https://github.com/ChinomnsoC/book-a-room.git` in a preferred directory.

To setup the whole project, at the root directory, run:
`make start`

To set up the frontend, at the root directory, run:
`make frontend-start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

To set up the backend, at the root directory, run:
`make backend-start`

## Testing

### Run backend tests

From the root folder run the following:

`cd book-a-room-backend` \
`poetry run pytest`

### Run frontend tests

From the root folder run the following:

`cd frontend-app`\
`npm test`