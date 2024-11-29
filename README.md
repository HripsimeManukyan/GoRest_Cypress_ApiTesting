# **Cypress API Test Suite for GoRest API**

## **GoRest_Cypress_ApiTesting**

Cypress API Test Suite for GoRest API is a test suite built with Cypress to automate API testing for the [GoRest API](https://gorest.co.in/).

---

## **Introduction**

This project was created to simplify and automate the testing of GoRest API endpoints.  
It provides a reliable and reusable framework for validating API functionalities, including CRUD operations, ensuring compliance with expected behaviors.

---

## **Prerequisites**

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/)

---

## **Installation**

To install the Cypress API Test Suite, follow these steps:

1. Clone the repository:  
   **`git clone https://github.com/HripsimeManukyan/GoRest_Cypress_ApiTesting`**

2. Navigate to the project directory:  
   **`cd GoRest_Cypress_ApiTesting`**

3. Install dependencies:  
   **`npm install`**

4. Start Cypress Test Runner:  
   **`npx cypress open`**

---

## **Usage**

### Pre-configuration

1. Before running the tests, update the `cypress.config.js` file with your API token:
```javascript
env: {
  token: 'your_gorest_api_token',
},

2. Replace your_gorest_api_token with a valid token obtained from the GoRest API.
⚠️ Security Note: Ensure you keep your API token secure and avoid committing it to public repositories.

##**Run Tests**
1. Run all tests:
   - Open the Cypress Test Runner with **`npx cypress open`** and select tests to run.
   - For headless execution, use **`npx cypress run`**.
2. Run specific tests:
   - Use the command **`npx cypress run --spec "**CypressApi_Testing_GoRest\cypress\e2e\GoRestApiTesting\apiTests.cy.js"`**.

---

## **Contributing**

If you'd like to contribute to Cypress API Test Suite for GoRest API, here are some guidelines:

1. Fork the repository.
2. Create a new branch for your changes: **`git checkout -b feature-name`**
3. Make your changes.
4. Write tests to cover your changes.
5. Run the tests to ensure they pass.
6. Commit your changes: **`git commit -m "Description of changes"`**
7. Push your changes to your forked repository: **`git push origin feature-name`**
8. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. You are free to use, modify, and distribute this software, provided proper attribution to the original author is included.  
See the [LICENSE](LICENSE) file for more details.

---

## **Authors and Acknowledgment**

This project was created by **[Hripsime](https://github.com/HripsimeManukyan)**.  
Special thanks to the [GoRest API](https://gorest.co.in/) team for providing the API used in this test suite.
