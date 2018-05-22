# hive-design-system-token-tool

Exploring what could be done with a tool to manage tokens for use in design systems. Particularly react-sketchapp.


# Forked off the repository
 https://github.com/pastahito/electron-react-webpack


## Folder structure
```
├── electron-react-webpack/             # Your project's name, you can rename it

    ├── app/

        ├── build/                      # Webpack 4 will manage this folder for you
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.jsx       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.jsx
                    ├── styles.css

            ├── App.jsx                 # React main component where everything is tied up
            ├── renderer_process.js     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

        ├── index.html                  # This HTML only uses build/ folder's files

    ├── main_process.js                 # Electron's main process. Whole app is launched from here
    ├── package.json
    ├── webpack.config.js               # Webpack 4 setup
```
