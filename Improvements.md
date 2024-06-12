OOP best practices
  * Scalability   
* Use class based approaches instead of functional programming, it would make scalability of the code easier as the code gets more complex.   

Linting
* Setting up ESlint to perform checks for code quality. 

* Documentation:
  * Readability
  * Maintainability
* Add documentation for the project, include any setup that needs to be run in order to run the server or the tests. Any other notes that would help developers who have not contributed to the project to be up to speed and continue maintaining the code.

* Sonarqube and Snyk
  * Maintainability
  * Security
* Integrate Snyk for checking all package issues (Some packages have security issues, Snyk would be able to provide you af there is a fix available for that specific version of the package and if a patch is available, implement the new version while being aware that new versions might introduce breaking changes) 
* Add SonarQube integration to check for functions and test coverage. It's an automatic code review tool which detects issues in the code and helps you help you perform continuous code inspections on your projects. 

* More robust tests data
  * Testability
  * Maintainability
* Currently the test data is changed by the tests in each stage. So if the pipeline which are running the tests are run again because the test data is changed, they won't be able to pass again. Each test must have its own set of data to test on. An better approach would be to use a mock data or if the test produce results use snapshots, then every time a change is made on the application we can see how the snapshots have changed and be confident if the code is doing what it needs to do. (NoSQL or SQL based on requirements of the project)
* Add test coverage on functions and tests, so each time a new commit or PR os created we have an understanding on what functions might have been missed.

Authentication and Authorisation 
  * Security
* Implement auth for accessing endpoints and APIs, weather an API key is used or other mechanisms.

Logging and monitoring
  * Maintainability
  * Testability 
* Provide better logging for necessary sections on the application. It would provide you with better debugging and monitoring capabilities which makes finding the bugs easier as the application grows larger and more complex. Also makes testing the software easier as you will be able to check each middleware or progress of code in the monitoring tool you have.

Global Error handling
  * Maintainability
* Add global error handler which can catch any error and provide the relevant http status code based on the response of the API.
* Check incoming data based on the datatype and provide error if the data does not match the request, instead of add error handler for each handler.  

Miscellaneous
* Add gitignore file to exclude what needs to be added to the repository on the server.
* Use formatting tools and check if all files in the project are formatted based on the style and implement on the CI in the pipelines.
* Add pre commit hooks with husky to check before commiting code.
* Use specific formats for commits to be able to release notes later based on the commits. 
