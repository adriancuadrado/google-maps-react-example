# Google Maps React example

View it live here: https://adriancuadrado.github.io/google-maps-react-example/

## How to install and run the project

### Docker

The easiest way to run this project is using the published docker image:
```
docker run \
--interactive \
--tty \
--rm \
-p 3000:3000 \
--name google-maps \
--env REACT_APP_GOOGLE_MAPS_API_KEY=<YOUR_API_KEY> \
adriancuadrado/google-maps-react-example
```
> Don't forget to replace `<YOUR_API_KEY>` with the correct value

> The `--interactive` and `--tty` options are there to allow killing the process with <kbd>Ctrl</kbd>+<kbd>C</kbd>

Then you can open this link with your web browser: http://localhost:3000/

### Local development

If you want to run this project for development, then follow these steps:
1. Install the dependencies locally:
```
npm install
```
2. Copy the _.env_ file to another called _.env.local_ and edit the environment as you see fit.
3. Run the server:
```
npm start
```
Once the server is running, you can view the result in this link: http://localhost:3000/

## How to run the tests

1. Make sure you have installed the [Firefox web browser](https://www.mozilla.org/).
2. Download the [Firefox browser driver](https://github.com/mozilla/geckodriver/releases) downloading and extracting the last release of geckodriver for your platform.
3. Follow [these instructions](https://www.selenium.dev/documentation/getting_started/installing_browser_drivers/#adding-executables-to-your-path) to add the extracted executable to your **PATH**.
4. Copy the _.env.test_ file to another called _.env.test.local_ and edit the environment as you see fit.
5. Execute this command:
    ```
    npm test -- --watchAll=false
    ```

## How to generate a bundle with reduced size
Just run this command:
```
npm run build
```