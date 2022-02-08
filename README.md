Coding Assessment Platform

tool used-
Angular 12.2.9
nodejs
postgres
typeORM

User can start writing program without the hassle of setting up the environment.
user can sign in and start to code
the use can choice a problem to solve
they can select out of C++,C,c,C#,Java,Python,Ruby,Kotlin and Swift to solve the problem
the users code is checked in the backend to make sure it passes all testcases
if the user's code passes all testcases it is consider solved.

Backend

When user runs the code the code, language and input is sent to the backend using rest api
this data is then send to codex server to compile and the output is send back

during submit the code is run using custom inputs and the resposnse from codex is compared to the output stored in database

the queston and sample inputs and sample output and hiddesd testcases are stored into a postgres database
typeORM is used to simplify the storage and retrival of data
