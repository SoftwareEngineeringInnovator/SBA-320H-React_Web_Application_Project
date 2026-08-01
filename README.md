# Cybersecurity Vulnerability Explorer

The Cybersecurity Vulnerability Explorer is a React web application that allows users to search for publicly reported cybersecurity vulnerabilities.

Users can search by entering a technology or product name, such as `Windows`, `Chrome`, or `Apache`. They can also search for a specific CVE identification number, such as `CVE-2021-#####`.

The application retrieves vulnerability information from the National Vulnerability Database and displays the results in a clear and organized format.

## Live Website

[View the Cybersecurity Vulnerability Explorer on Netlify](https://reactwebapplicationproject.netlify.app/)

## GitHub Repository

[View the project on GitHub](https://github.com/SoftwareEngineeringInnovator/SBA-320H-React_Web_Application_Project)

## Features

- Search for vulnerabilities by product or technology keyword
- Search for a specific CVE identification number
- Display up to 10 vulnerability results
- Display the CVE identification number
- Display the published date
- Display the vulnerability description
- Display the total number of vulnerabilities found
- Display a loading message while the API request is processing
- Display an error message when the API request fails
- Display a message when no vulnerabilities are found
- Prevent the form from being submitted with an empty search field

## Technologies Used

### React

React was used to build the user interface with reusable components.

### JavaScript

JavaScript was used to manage the application logic, form submission, API requests, and vulnerability data.

### HTML and JSX

HTML and JSX were used to organize and display the application content.

### CSS

Regular CSS was used to style the header, search form, status messages, results section, and vulnerability cards.

### Vite

Vite was used to create the React project and provide the development and production build tools.

### React `useState`

The `useState` hook was used to manage the text entered into the search field.

### React `useReducer`

The `useReducer` hook was used to manage the vulnerability search state, including:

- Vulnerability results
- Loading status
- Error messages
- Total results
- Completed searches

### Fetch API

The JavaScript Fetch API was used to make an AJAX request to the National Vulnerability Database (NVD) API.

### NVD API

The NVD CVE API provides the cybersecurity vulnerability information displayed by the application.

### Oxlint

Oxlint was used to check the JavaScript and React files for common coding problems.

### Git and GitHub

Git and GitHub were used for version control, frequent commits, and storing the project repository.

### Netlify

Netlify was used to build and deploy the live React application.

## Project Approach

I began by creating a React project with Vite and confirming that the starter application worked correctly.

The application was then divided into simple React components:

- `Header.jsx` displays the application title and introduction.
- `SearchForm.jsx` manages the search input and form submission.
- `ResultsList.jsx` displays the vulnerability results returned by the API.
- `App.jsx` connects the components, reducer, and API request.
- `searchReducer.js` manages the different search states.
- `nvdApi.js` contains the request to the NVD CVE API.

I used `useState` for the controlled search input and `useReducer` for the related API search information.

The project was developed in small steps with testing, lint checks, production builds, and frequent Git commits.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ResultsList.jsx
│   └── SearchForm.jsx
├── reducers/
│   └── searchReducer.js
├── services/
│   └── nvdApi.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## How to Use the Application

1. Open the live Netlify website.
2. Enter a product, technology, or CVE identification number.
3. Click the **Search** button.
4. Review the vulnerability results.

Example keyword searches:

```text
Windows
Chrome
Apache
Linux
```

Example CVE search:

```text
CVE-2021-44228
```

## How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/SBA-320H-React_Web_Application_Project.git
```

### 2. Enter the project folder

```bash
cd SBA-320H-React_Web_Application_Project
```

### 3. Install the project dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local address displayed by Vite in the terminal.

## Available Commands

Start the development server:

```bash
npm run dev
```

Run Oxlint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Possible Future Improvements

- Add pagination for additional search results
- Add severity and CVSS score information
- Add more search filters
- Allow users to save selected vulnerabilities
- Add a direct link to each official NVD vulnerability record

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: SBA-320H-React_Web_Application_Project