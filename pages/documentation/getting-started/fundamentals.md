---
permalink: /documentation/fundamentals/
layout: styleguide
title: USWDS fundamentals and quickstart guide
category: How to use USWDS
lead: Getting started with the design system
subnav:
- text: How to add USWDS source code to your project
  href: '#how-to-add-uswds-source-code-to-your-project'
- text: Install Node and npm
  href: '#install-node-and-npm'
- text: Initialize your project in Node
  href: '#initialize-your-project-in-node'
- text: Install USWDS
  href: '#install-uswds'
- text: How to compile the source code into browser-readable CSS
  href: '#how-to-compile-the-source-code-into-browser-readable-css'
- text: The Sass entry point
  href: '#what-to-compile-the-sass-entry-point'
- text: USWDS settings
  href: '#uswds-settings'
- text: Using uswds-gulp
  href: '#how-to-compile-using-uswds-gulp'

---

USWDS is a powerful and adaptable design system. There are two fundamental concepts teams need to understand to set started:

- How to add USWDS source code to your project
- How to compile the source code into browser-readable CSS

Once you understand how to work with USWDS source code, you'll be well on your way to designing and building with the design system.

## How to add USWDS source code to your project

In order to _use_ USWDS with your project, you need to add it to your project.

The best way to add USWDS to your project is through a terminal window (see tips for using **Terminal** on a [Mac [apple.com]](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) or [Windows [microsoft.com]](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)). We distribute our source code through a service called **Node Package Manager** (or **npm**) which uses a flavor of JavaScript called **Node.js**.

Installing USWDS with Node and npm allows you not only to install all the code the design system needs to compile, but versions this code as well — meaning that it ties the code to a specific version. It's easy to know what version of the design system you're using, and it's easy to update to a newer (or older) version of the design system as well.

### Install Node and npm

Open up your terminal application and a terminal window. Check to see if you have Node installed with `node -v` should be at least **12.16.1**.

{:.site-terminal}
```bash
node -v
# v12.16.1 [or higher]
```

If you don't have Node, install it from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

### Initialize your project in Node

Once you have Node and npm installed, go to the root of your project directory in the terminal. The root is the topmost directory associated with your project, the directory that includes all your project files and directories.

{:.site-terminal}
```bash
cd path/to/project/root
```

Initialize your project to create a file called **package.json**. Once you have this file, you can use **npm** to install software (or "packages") like USWDS.

{:.site-terminal}
```bash
npm init

# This utility will walk you through creating a package.json file.
# It only covers the most common items, and tries to guess sensible defaults.
# ...
```

This will start a series of prompts at the command line. Usually the defaults (in parentheses) are OK for a simple project. You can always edit these values later. Once this is finished, you'll have a new **package.json** file in the root.

{:.site-terminal}
```bash
ls

# package.json
# [other directory contents...]
```

### Install USWDS

Now you can install USWDS — and any other Node package — from the command line with **npm**. npm does the work of installing packages and making sure that it installs all the software that each package needs to run (which is also known as a package's _dependencies_). All of this happens behind the scene when you install a package, and the final software is saved into a new directory called **node_modules**.

Install USWDS from the command line, and save it as a dependency in your `package.json`:

{:.site-terminal}
```bash
npm install uswds --save

# [a lot of notices]
# + uswds@2.11.1 [or another version number]
# [a few more notifications]
```

npm will show some notifications, install USWDS, and display the version number of the USWDS package. You'll also see this information in your package.json:

{:.site-terminal}
```json
"dependencies": {
  "uswds": "^2.11.1" [or another version number]
}
```

Now the USWDS source code is in your project, in `./node_modules/uswds`, as well as other directories for packages that are USWDS dependencies.

<div class="site-note padding-2">
  <h4 class="margin-y-0 font-lang-lg">Don’t modify the source code</h4>
  <p class="margin-top-1">This may seem counterintuitive, but now that you've installed the USWDS source code, you don't want to edit it in any way. This is because the source code in the <code>node_modules</code> directory is controlled by npm, and could be rewritten at any time, especially if you reinstall or update the USWDS version. In fact, if you use Git or Github for your project, you should add <code>node_modules</code> to your <code>.gitignore</code> file.</p>
  <p class="margin-bottom-0">However, you do want to <em>use</em> the source code. In the next section, we'll discuss how to compile, theme, and extend the USWDS source code in your project.</p>
</div>

## How to compile the source code into browser-readable CSS

USWDS source code is written in a language called [Sass [sass-lang.com]](https://sass-lang.com/), a powerful stylesheet language that builds automation, functions, and logic into CSS. Browsers can't read native Sass files, they need to be compiled into CSS — usually a single CSS file — before we can use them. Basically, when you develop with USWDS, you do all your stylesheet work in Sass, then use a compiler to convert that Sass into CSS.

{:.margin-top-4 }
![Diagram showing the compile process. Settings, USWDS code, and custom code pass through a compiler into the final CSS codebase.]({{ baseurl }}/assets/img/fundamentals/fundamentals-compile.jpg)

_So what are we compiling? And what software do we need to compile?_

### What to compile: The Sass entry point

A project often has many Sass files, but typically there's a single Sass file that serves as the root — the "homepage" of the Sass — the file that links out to the others. This root file is also known as the **Sass entry point**. The Sass entry point is the most important stylesheet file in your project because it tells the compiler what source files make up your Sass codebase.

The Sass entry point is a simple file that only needs to do three things:

1. Include or point to a **USWDS [settings file]({{ site.baseurl }}/documentation/settings/)** (or files)
1. Point to the **USWDS Sass entry point**
1. Include or point to your project's **custom Sass**

The entry point is usually called something like `index.scss` or `styles.scss`. At its simplest, it looks like this:

{:.site-terminal}
```scss
// Include or point to a USWDS settings file:
@include "uswds-settings.scss";

// Point to the USWDS source code:
@include "./path/to/source/uswds";

// Include or point to your project's custom Sass:
@include "project-custom.scss";
```

In plain language, this says

- **Get the instructions:** First, get the USWDS settings that tell the design system how to build the styles.
- **Create the foundation:** Then build all the USWDS styles from these settings.
- **Build new work on top of that foundation:** Finally, add any custom project styles built from design system code.

We'll look at each section before moving on to compiling.

{:.site-note}
**Note:** If you use **uswds-gulp**, as detailed below, this tool will build a Sass entry point for you. You don't need to do this ahead of time when using uswds-gulp.

### USWDS settings

USWDS settings provide a way to customize your theme styles without writing new code. Settings tell the design system how to build its stylesheets. In the Sass entry point, these settings are the first thing you need to import.

Any individual setting is, essentially, a Sass variable. Each setting begins with the `$theme`- prefix, and we provide a list of all available settings [in the USWDS documentation]({{ site.baseurl }}/documentation/settings/) as well as examples [in the USWDS codebase [github.com]](https://github.com/uswds/uswds/tree/main/src/stylesheets/theme). A very simple settings file might look like this:

{:.site-terminal}
```scss
$theme-image-path:              "../uswds/img";
$theme-show-compile-warnings:   false;
$theme-color-primary-lightest:  "green-warm-10";
$theme-color-primary-lighter:   "green-warm-20";
$theme-color-primary-light:     "green-warm-30";
$theme-color-primary:           "green-warm-50";
$theme-color-primary-vivid:     "green-warm-50v";
$theme-color-primary-dark:      "green-warm-60v";
$theme-color-primary-darker:    "green-warm-70v";
$theme-color-primary-darkest:   "green-warm-80";
$theme-banner-background-color: "ink";
$theme-banner-link-color:       "primary-light";
$theme-banner-max-width:        "none";
```

You can include settings in a single file, or break them up into multiple files — just as long as you include all the settings files you've modified at the start of the Sass entry point.

#### USWDS source code

The USWDS source code is the core of the design system. It contains all the styles for USWDS components, as well as the design language of Sass tokens and functions used to build those components. USWDS source code has its own Sass entry point, which lives in the `node_modules` directory when you install USWDS with npm.

The entry point itself is called `uswds.scss` and it's found in the `/dist/scss`  directory of the USWDS source code. When you install with npm, the complete path looks something like:

{:.site-terminal}
```bash
./node_modules/uswds/dist/scss/uswds.scss
```

Add this file to your project's Sass entry point with the following line. Note that you can leave the trailing `.scss` off of the import statement.

{:.site-terminal}
```scss
@import "./node_modules/uswds/dist/scss/uswds";
```

#### Custom Sass

After you import the USWDS source code, you can build new styles with USWDS tokens, functions, and mixins. These [tokens, functions, and mixins]({{ site.baseurl }}/design-tokens/) are the design language of the design system. They're the building blocks of the code we write, and should be the building blocks of any custom code as well.

For the purposes of this guide, we won't get into custom code, but the important thing to understand is that any custom code should follow settings and the USWDS source in your Sass entry point.

### How to compile: Using uswds-gulp

Once you have a Sass entry point for your project, you need a tool to convert the source Sass into browser readable CSS. This step is called compiling, and we use a talk manager called [Gulp [gulpjs.com]](https://gulpjs.com/) to watch our directories for changes, and compile our CSS whenever there's a change. We've developed a tool called [uswds-gulp [github.com]](https://github.com/uswds/uswds-gulp) to help teams install Gulp and get up and running as quickly as possible.

#### Install uswds-gulp

From your project's root, run the following command to install uswds-gulp and all its dependencies:

{:.site-terminal}
```bash
npm install autoprefixer gulp gulp-replace sass gulp-sass gulp-sourcemaps gulp-rename gulp-svg-sprite gulp-postcss postcss postcss-csso uswds uswds-gulp@github:uswds/uswds-gulp --save-dev
```

#### Add configuration files

Gulp needs two files to compile USWDS properly:

- **gulpfile.js:** This file tells Gulp where to look for your files and what to do with them.
- **.browserslistrc:** This file tells Gulp how to build the CSS so it works in all the browsers that USWDS supports.

We include each of these files in the uswds-gulp package. Install them in your project by copying them out of the package and into your project root. So, from the project root, run the following two commands:

{:.site-terminal}
```bash
cp node_modules/uswds-gulp/gulpfile.js .
cp node_modules/uswds-gulp/.browserslistrc .
```

#### Configure Gulp

Now you'll need to edit `gulpfile.js` to configure it for your project. There are five settings you need to update, starting at line 37. Each of these needs a valid project directory. _Don't include a trailing slash in any of these paths._

{:.site-terminal}
```js
// Project Sass source directory
// Where should we put the USWDS Sass theme files"
const PROJECT_SASS_SRC = "./path/to/project/sass";

// Images destination
// Where should we save USWDS image assets?
const IMG_DEST = "./path/to/images/destination";

// Fonts destination
// Where should we save USWDS fonts?
const FONTS_DEST = "./path/to/fonts/destination";

// Javascript destination
// Where should we save USWDS javascript?
const JS_DEST = "./path/to/js/destination";

// Compiled CSS destination
// Where should we save compiled USWDS CSS?
const CSS_DEST = "./path/to/css/destination";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 106
const SITE_CSS_DEST = "./path/to/site/css/destination";
```

These are some good defaults for a Jekyll site:

{:.site-terminal}
```js
const PROJECT_SASS_SRC = "./stylesheets";
const IMG_DEST = "./assets/uswds/img";
const FONTS_DEST = "./assets/uswds/fonts";
const JS_DEST = "./assets/uswds/js";
const CSS_DEST = "./assets/uswds/css";
const SITE_CSS_DEST = "./_site/assets/uswds/css";
```

Save this file and you're ready to get started.

#### Initialize your project

Initialize your project to copy all the necessary image, font, and Javascript assets out of the source code. Initialization will also add a Sass entry point for your project, called styles.scss in the directory you set as `PROJECT_SASS_SRC`, above.

{:.site-note}
**Note:** Initialization will overwrite files already in **PROJECT_SASS_SRC**.

Initialize your project and get started by running the following command:

{:.site-terminal}
```bash
npx gulp init
```

This will add all the USWDS assets to the directories you set, adds a project Sass entry point, and compiles USWDS into CSS. This is the CSS file you want to add to the `<head>` of your project html.

Now you can also use uswds-gulp to watch for any changes to your project Sass and recompile the CSS. Watch and recompile with the following command:

{:.site-terminal}
```bash
npx gulp watch
```

This will run in your Terminal window. When you want to shut it down, use **control-c**.
