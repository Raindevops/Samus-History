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

 :seedling: **node version :** ``` v16.13.0 ```

If you only want to run the project, you can use docker commands described previously

**Run localy** :steam_locomotive:

    npm run dev
    npm run tailwind:watch

**Build the project** :wrench:

    npm run tailwind:build
    npm run build
    
