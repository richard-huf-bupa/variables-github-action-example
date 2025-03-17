import StyleDictionary from 'style-dictionary';

const BUILD_DIR = 'build/';

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: BUILD_DIR,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        },
      ],
    },
    js: {
      transformGroup: "js",
      files: [
        {
          format: "javascript/es6",
          destination: BUILD_DIR
        }
      ]
    },
    json: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: BUILD_DIR,
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
          options: {
            outputReferences: true
          }
        },
      ],
    },
    flutter: {
      transformGroup: "flutter",
      buildPath: BUILD_DIR,
      files: [
        {
          destination: "style_dictionary.dart",
          format: "flutter/class.dart",
          options: {
            className: "StyleDictionary"
          }
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
