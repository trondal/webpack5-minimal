import * as _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  printMe();
  element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
  return element;
}

document.body.appendChild(component());
