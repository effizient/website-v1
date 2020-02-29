# MIST-web

## Setup Instructions

To get all the right dependencies, begin by installing [NodeJS](https://nodejs.org/en/download/).

Now, after changing to this directory, you can run the following command to install all the packages that are used:

```
npm i
```

Now, you want to run the website locally to test out your changes. Install [Python2](https://www.python.org/downloads/) to be able to run a local server.

Now that you have Python2 installed, you can run the following command in the same directory to run a localserver.

```
python -m SimpleHTTPServer
```

Now the site is hosted locally on your computer and can be found at: http://localhost:8000

## Development

This website uses a JavaScript and CSS minifier/optimizer, so you will need to run the following command after any JS or CSS changes:

```
grunt build
```

Alternatively, you can just run the following command to get it to build after every time you save a JS or CSS file. (It starts listening to file changes.)

```
grunt
```

## Maintaining the Server

If there are packages that need to be updated, run the following code:

```
sudo apt-get update && sudo apt-get dist-upgrade
```

## Questions?

Feel free to reach out to [Baraa Hamodi](mailto:bhamodi@edu.uwaterloo.ca) if you have any questions regarding this website.
