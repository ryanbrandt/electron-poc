# Development

Make sure you are in `bio-local-mode` or `bio-dev-mode`

- `cd backend && pipenv install`
- `cd frontend && yarn install && yarn electron-dev`

Will take a few seconds to spin up a react webpack server, which electron will consume from. Will also spin up the flask backend with python, using `python-shell`.

Everyone will have to make a single adjustment for this to work, in `electron.js`, line `20`:

```js
pythonPath: path.resolve(
        "/Users/Ryan/.virtualenvs/backend-xwC3nyTg/Scripts/python.exe"
),
```

This path will have to updated to point at the appropriate virtual environment. We can likely do this programmatically.

Once everything is running, changes to both backend and frontend can be made and will be hot reloaded.

# Distribution

Make sure you are in `bio-release-mode`

- `cd backend && pipenv build`
- `cd frontend && yarn package`

`pipenv build` will generate compile the flask API into an executable.

`yarn package` will build the react project, shift files around directories as necessary and build the electron project with `electron-builder`

A `dist` directory will be generated in `frontend`, which will contain an installer, `electron-dummy-app Setup 0.1.0.exe`. Running this executable will install the app, launch it, and create a shortcut on your desktop. Launching the installed app will open the app, which should run exactly the same as in development.

As far as distributing the app goes between other machines, we would simply have to provide them with the generated `dist` directory and have them run the installer.

If we need to create an OSX distribution, we need to build the project on a mac.
