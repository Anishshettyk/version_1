import { css } from 'styled-components';

/*********************************BITTER FONT****************************************/
import bitterRegularWoff from './../fonts/bitter/bitter-v16-latin-regular.woff';
import bitterRegularWoff2 from './../fonts/bitter/bitter-v16-latin-regular.woff2';
import bitterBoldwoff from './../fonts/bitter/bitter-v16-latin-600.woff';
import bitterBoldwoff2 from './../fonts/bitter/bitter-v16-latin-600.woff2';

import bitterRegularItalicWoff from './../fonts/bitter/bitter-v16-latin-500italic.woff';
import bitterRegularItalicWoff2 from './../fonts/bitter/bitter-v16-latin-500italic.woff2';
import bitterBoldItalicWoff from './../fonts/bitter/bitter-v16-latin-600italic.woff';
import bitterBoldItalicWoff2 from './../fonts/bitter/bitter-v16-latin-600italic.woff2';

/*********************************LOBSTER FONT****************************************/
import lobsterRegularWoff from './../fonts/lobster/lobster-v23-latin-regular.woff';
import lobsterRegularWoff2 from './../fonts/lobster/lobster-v23-latin-regular.woff2';

/*********************************ROBOTO FONT****************************************/
import robotoRegularWoff from './../fonts/roboto/roboto-v20-latin-regular.woff';
import robotoRegularWoff2 from './../fonts/roboto/roboto-v20-latin-regular.woff2';
import robotoBoldwoff from './../fonts/roboto/roboto-v20-latin-500.woff';
import robotoBoldwoff2 from './../fonts/roboto/roboto-v20-latin-500.woff2';

import robotoRegularItalicWoff from './../fonts/roboto/roboto-v20-latin-italic.woff';
import robotoRegularItalicWoff2 from './../fonts/roboto/roboto-v20-latin-italic.woff2';
import robotoBoldItalicWoff from './../fonts/roboto/roboto-v20-latin-500italic.woff';
import robotoBoldItalicWoff2 from './../fonts/roboto/roboto-v20-latin-500italic.woff2';

const bitterRegularWeights = {
  500: [bitterRegularWoff, bitterRegularWoff2],
  600: [bitterBoldwoff, bitterBoldwoff2],
};
const bitterItalicWeights = {
  500: [bitterRegularItalicWoff, bitterRegularItalicWoff2],
  600: [bitterBoldItalicWoff, bitterBoldItalicWoff2],
};

const lobsterWeights = {
  500: [lobsterRegularWoff, lobsterRegularWoff2],
};

const robotoRegularWeights = {
  400: [robotoRegularWoff, robotoRegularWoff2],
  500: [robotoBoldwoff, robotoBoldwoff2],
};

const robotoItalicWeights = {
  400: [robotoRegularItalicWoff, robotoRegularItalicWoff2],
  500: [robotoBoldItalicWoff, robotoBoldItalicWoff2],
};

const bitter = {
  name: 'bitter',
  normal: bitterRegularWeights,
  italic: bitterItalicWeights,
};

const lobster = {
  name: 'lobster',
  normal: lobsterWeights,
};

const roboto = {
  name: 'roboto',
  normal: robotoRegularWeights,
  italic: robotoItalicWeights,
};

const fontFace = (family, style = 'normal') => {
  let styles = '';
  for (const [weight, format] of Object.entries(family[style])) {
    const woff = format[0];
    const woff2 = format[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }
  return styles;
};

const bitterNormal = fontFace(bitter);
const bitterItalic = fontFace(bitter, 'italic');

const lobsterNormal = fontFace(lobster);

const robotoNormal = fontFace(roboto);
const robotoItalic = fontFace(roboto, 'italic');

const Fonts = css`
  ${bitterNormal + bitterItalic + lobsterNormal + robotoNormal + robotoItalic}
`;

export default Fonts;
