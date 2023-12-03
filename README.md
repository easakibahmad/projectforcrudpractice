# step by step project set up

1. npm initialization: npm init -y  
2. install express js: npm install express
3. install mongoose: npm install mongoose --save
4. install typescript: npm install typescript --save-dev
5. cors installation: npm install cors  
6. dotenv installation: npm i dotenv
7. tsc initialization: tsc -init (typescript json file creation)
8. root and out directory setup: tsconfig.json file (rootDir -> src and outDir -> dist)
9.  add into scripts -> 'build' : 'tsc'
10. mongodb connection establishment
11. dotenv configuration folder
12. eslint installed
13. ts node dev added: npm i ts-node-dev
14. added into scripts:'start:dev' : 'ts-node-dev --respawn --transpile-only ./src/server.ts'  
    -> npm run start:dev

# design pattern

1. interface
2. schema
3. model
4. db query

# work with pattern

1. student interface, schema and model created in separate module
2. student routes, controller, service file creation for api management

# api

1. create student
2. get all student
3. get single student

# validation

1. we can add validation from mongoose for object or other data types
2. we can validate by using mongoose custom validation function
3. using validator built in library for validation

# method

1. mongoose static method
