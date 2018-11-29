# Vue, Webpack 4, Babel and SASS

##  Environment configuration 

- This project depends on node version 6 or higher
- On a personal computer the version of node should be determined by running `node –v`.
  [If the version is lower than 6, then update node & npm before you progress]( https://docs.npmjs.com/getting-started/installing-node)
- If cloud9 (my teaching set up) is being used as a learning tool/development environment node version manager(nvm) can be used to upgrade to the correct version of node. From within your root workspace folder run:

  - `nvm install 6`
  - `nvm alias default 6` 


## Running the project 
- Clone this repository `git clone https://github.com/joeappleton18/Simple-Vue-Webpack-and-SASS.git`
- Run the following commands:

- `npm install`  : install the dependencies 
- `npm run watch`: will run webpack continuously 

- The build will be output to the `dist` folder every time you update a file that's part of the 
project bundle. Never edit anything in the dev folder. 


## Creating new HTML pages

- Each time you create a new HTML file you will need to import it in `main.js`
  e.g. ``import '../index.html';``
- Ensure the `<script src="bundle.js"></script>` tag is included above the `</body>` tag in the new HTML page.


## Configuration (webpack.config.js)

- The project works out of the box, however it is expected that students will extend it.  Or, at the very minimum, play around with the settings.

### Copying assets to the dist folder 

- To copy non-bundled assets to the dist folder simply add the asset `from` and `to` location to the `CopyWebpackPlugin array`. The asset can be a file or a whole folder. 

```javascript
new CopyWebpackPlugin([
            {from: 'src/images', to: 'images'},
            {from: 'src/fonts', to:  fonts}
        ])
```

























