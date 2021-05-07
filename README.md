# :video_game: Samus History :space_invader:

This project is a single HTML page about the heroin Samus in the world of Metroid

:warning: We are working on integrating Webpack to this project, so there is several way to run it :warning:

## On the main branch :deciduous_tree:

### Docker

**Build docker image** :hammer:

    docker build -t samus-history .

**Run docker image** :monorail:

    docker run --rm --name=samus-history -d -p 80:80 samus-history

### On the develop branch :leaves:

 :seedling: **node version :** ``` v14.16.1 ```

If you only want to run the project, you can use docker commands described previously

**Run localy** :steam_locomotive:

    npm install
    npm run watch

copy the /public/index.html path in your favorite browser, and you're ready for coding ! 

**Build the project** :wrench:

    npm run build
