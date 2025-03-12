import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  },
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      prefix: 'rds-new',
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        },
      ],
    }
  },
});

await sd.buildAllPlatforms();