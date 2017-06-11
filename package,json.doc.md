
# dependencies

"^" means ... ?
"~" means ... ?

# scripts

This section contains command executable using `npm run <script name>`.

## "clean_windows": "if exist app\\build rmdir app\\build /s /q"
Delete the folder app/build and its content

## "build": "tsc -p app/"
Compile with TypeScript compiler.
-p means "project", it will use the "app/" folder and the "tsconfig.json" file if exists.


### tsconfig.json

-"outDir": "build"
Indicats to create the JavaScript files in the "build" directory.


# Heroku

It requires the script "start".

## Procfile

try:
web: env PORT=3001 npm run start --port=$PORT
