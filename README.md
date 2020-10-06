# U.S. Web Design System documentation

This repo includes code and documentation for the U.S. Web Design System website. For information on USWDS (components) themselves, please visit our [uswds](https://github.com/uswds/uswds) Github repo.

Note that this README includes steps to pull the latest version of USWDS into your local instance of the documentation.

## Running locally

The U.S. Web Design System documentation is built using Jekyll for the file framework, gulp for task management, and the node module for USWDS.

### Before you start

You will need to have the following installed on your machine before following the commands below:

1. Ruby v2.2.2+, [Installation guides](https://www.ruby-lang.org/en/documentation/installation/)
1. Node v4.2.3+, [Installation guides](https://nodejs.org/en/download/)
1. Bundler v1.12.3+, [Installation guides](http://bundler.io/v1.13/guides/using_bundler_in_application.html#getting-started---installing-bundler-and-bundle-init)
1. Chrome v59 or higher (v60 if on Windows)

### Building the documentation with gulp

Some parts of the documentation are built using [gulp](http://gulpjs.com/).

To work on the site, switch to your local copy of the repository in terminal then run the following command to install project dependencies:

```sh
npm install
```

Now that all of your dependencies are installed, you can run your local server by running the following command:

```sh
npm start
```

Go to `127.0.0.1:4000` in your browser — you should be viewing a local instance of [designsystem.digital.gov](https://designsystem.digital.gov).

Here are a few other utility commands you may find useful:

- `npm run clean`: Cleans out copied-over dependency assets.

- `npm run lint`: Runs `eslint` and `sass-lint` against JavaScript and Sass files.

- `npm test`: Runs all tests and linters.

- `npm run watch`: Runs a series of commands that watches for any changes in both USWDS node module and the root level asset folders in this repo.

- `npm start -- --incremental` or `npm run serve`: Runs your local server with incremental regeneration enabled to greatly improve build time. Use instead of `npm start`.

### Using the latest version of the `uswds` package

Sometimes you will want to use the latest version of the `uswds` repo. Follow these steps to do so:

1. Clone the latest version of the [`uswds` repo](https://github.com/uswds/uswds/tree/develop).
1. Run `npm install` to install the dependencies required for the package in the `uswds` directory.
1. Run `npm run build` to create the built version of USWDS in the `uswds` directory.
1. Run `npm link` in the _root level_ of the `uswds` directory on your local machine.
1. Run `npm link uswds` in the _root level_ of the `uswds-site` directory on your local machine.
1. Run `npm start` in the `uswds` directory, and make a note of the `Local URL` that Pattern Lab is serving.
1. In another terminal window, set the `PATTERNLAB_BASE_URL` env var to the running Pattern Lab instance for `uswds`. In your terminal window in the `uswds-site` directory, enter `export PATTERNLAB_BASE_URL="http://127.0.0.1:3000"` (or the `Local URL` noted above).
1. In the `uswds-site` window, run `npm run serve` in the `uswds-site` directory to start the Jekyll server.
1. Run `npm run watch` in the `uswds-site` directory to have changes to that repo automatically built and compiled. Note: `uswds-site` will _not_ automatically rebuild when there are changes in `uswds`, you'll need to trigger a site rebuild manually to reflect changes in the `uswds` repo.

You are now linked and using the local version of USWDS. To unlink this version, type `npm unlink uswds` from the _root level_ of the `uswds` directory.

### Pattern Lab components

USWDS uses the [Pattern Lab design system](http://patternlab.io/) to organize and document the components. This documentation site pulls the components from Pattern Lab to showcase them on the site. This is done with a custom `patternlab_component` Jekyll tag, which takes the full name of the patternlab component as a parameter.

### Deployment and previews

This site is deployed on [Federalist](https://federalist.18f.gov/), which automatically builds the public site whenever commits are pushed to `main`. Federalist also builds public previews for each branch pushed to GitHub.

### Updating the USWDS version

To update the version of USWDS being used, change the version that
`package.json` specifies in its `dependencies` section.

We currently pull USWDS via git rather than npm, as it allows us to
use any tag or commit during development. To install a specific commit,
you can use e.g.:

```
npm install --save "uswds/uswds#fb49e4f"
```

Alternatively, to use a specific version tag, use e.g.:

```
npm install --save "uswds/uswds#v1.3.1"
```

This version number or commit hash is automatically parsed when the site
is built and used for display on the site (see `_plugins/uswds_version.rb`
for details). Therefore, be sure to use an actual version tag on all
`main` branch commits--otherwise a commit hash will show up as the
version on the production site, which would be confusing.

### Adding content to the "Updates" section

See the [`_posts` directory](_posts/#readme) for instructions on adding updates.

### Dynamic content

Some of the content on the documentation site is dynamically fetched from
GitHub. If you want to ensure that its API won't rate-limit you, you
may want to
[create an access token](https://github.com/blog/1509-personal-api-tokens)
and assign it to your `GITHUB_ACCESS_TOKEN` environment variable.

The dynamic content is stored in the `.jekyll_get_cache` directory and
won't be re-fetched once it's cached there. However, this means that your
data can get stale over time, so if you want to ensure that your site
is using the very latest data, you'll want to clear the cache by running:

```
rm -rf .jekyll_get_cache
```

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). These guidelines are directions for opening issues and submitting pull requests, and they also detail the coding and design standards we follow.
