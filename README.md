# Canvas LMS Remove All Sections Default Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that
removes the 'All sections' default from the 'Post to' field when creating new announcements or assignments.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-clear-all-sections-default-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-clear-all-sections-default-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-clear-all-sections-default-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-clear-all-sections-default-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-clear-all-sections-default-plugin)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-clear-all-sections-default-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-clear-all-sections-default-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-clear-all-sections-default-plugin';

addPlugin(enableCourseRecycleBinPlugin);

run();
```
