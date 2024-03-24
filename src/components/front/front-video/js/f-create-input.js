/** ***************
Функция createInput создает inputArray
**************** */

// 1. Импортируем массивы из файлов data-video.js...
// Code
import dataVideoHtmlcss from './data/data-video-htmlcss';
import dataVideoJs from './data/data-video-js';
import dataVideoTs from './data/data-video-ts';
import dataVideoCsharp from './data/data-video-csharp';
import dataVideoPascal from './data/data-video-pascal';
import dataVideoPug from './data/data-video-pug';
import dataVideoSass from './data/data-video-sass';

// Base
import dataVideoBase from './data/data-video-base';
import dataVideoAlgorithm from './data/data-video-algorithm';

// Framework
import dataVideoAngular from './data/data-video-angular';
import dataVideoReact from './data/data-video-react';
import dataVideoVue from './data/data-video-vue';
import dataVideoNode from './data/data-video-node';
import dataVideoElectron from './data/data-video-electron';
import dataVideoBootstrap from './data/data-video-bootstrap';
import dataVideoNuxt from './data/data-video-nuxt';
import dataVideoRedux from './data/data-video-redux';
import dataVideoYii2 from './data/data-video-yii2';

// CMS
import dataVideo1cbitrix from './data/data-video-1cbitrix';
import dataVideoDrupal from './data/data-video-drupal';
import dataVideoJoomla from './data/data-video-joomla';
import dataVideoOpencart from './data/data-video-opencart';
import dataVideoTilda from './data/data-video-tilda';
import dataVideoWp from './data/data-video-wp';

// Tools
import dataVideoDocker from './data/data-video-docker';
import dataVideoGit from './data/data-video-git';
import dataVideoGulp from './data/data-video-gulp';
import dataVideoWebpack from './data/data-video-webpack';

// Theme
import dataVideoFrontend from './data/data-video-frontend';
import dataVideoWeb from './data/data-video-web';

import dataVideoBem from './data/data-video-bem';
import dataVideoFigma from './data/data-video-figma';
import dataVideoFreelance from './data/data-video-freelance';
import dataVideoInterview from './data/data-video-interview';
import dataVideoJson from './data/data-video-json';
import dataVideoVscode from './data/data-video-vscode';

// 2. Создаем массив dataArray для импортированных массивов
const dataArray = [
  // Code
  dataVideoHtmlcss, dataVideoJs, dataVideoTs, dataVideoCsharp,
  dataVideoPascal, dataVideoPug, dataVideoSass,
  // Base
  dataVideoBase, dataVideoAlgorithm,
  // Framework
  dataVideoAngular, dataVideoReact, dataVideoVue, dataVideoNode,
  dataVideoElectron, dataVideoBootstrap, dataVideoNuxt, dataVideoRedux,
  dataVideoYii2,
  // CMS
  dataVideo1cbitrix, dataVideoDrupal, dataVideoJoomla, dataVideoOpencart,
  dataVideoTilda, dataVideoWp,
  // Tools
  dataVideoDocker, dataVideoGit, dataVideoGulp, dataVideoWebpack,
  // Theme
  dataVideoFrontend, dataVideoWeb, dataVideoFreelance,

  dataVideoBem, dataVideoFigma, dataVideoInterview, dataVideoJson, 
  dataVideoVscode,];

// 3. Создаем массив с книгами dataVideo из массива dataArray
const dataVideo = [].concat(...dataArray);

export default function createInput() {
  return dataVideo;
}
