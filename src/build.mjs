import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: './build/',
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
          destination: "./build/",
          filter: {
            type: "color"
          }
        }
      ]
    },
    json: {
      prefix: 'rds-',
      transformGroup: 'css',
      buildPath: 'build/',
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
      buildPath: "build/",
      files: [
        {
          destination: "style_dictionary.dart",
          format: "flutter/class.dart",
          options: {
            className: "StyleDictionary"
          }
        }
      ]
    },
    rn: {
      transformGroup: "react-native",
      buildPath: "./src/style-dictionary-dist/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6"
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
