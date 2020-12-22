// import BG0 from './assets/chinh_40_cover.jpg'
// import BG1 from './assets/john_40_cover.jpg'
// import BG2 from './assets/jon_40_cover.jpg'
import BG3 from './assets/mika_40_cover.jpg'
import BG4 from './assets/peter_40_cover.jpg'
import BG5 from './assets/scott_40_cover.jpg'
import BG6 from './assets/yanni_40_cover.jpg'
import BG7 from './assets/woman-sitting_20_cover.jpg'
import BG8 from './assets/hands_40_cover.jpg'
// import BG9 from './assets/alley_40_cover.jpeg'
import BG10 from './assets/sleepstreet_40_cover.jpg'

import BLACK20 from './assets/black20.png'
import BLACK40 from './assets/black40.png'
import BLACK60 from './assets/black60.png'

const BLACK = {
    20: BLACK20,
    40: BLACK40,
    60: BLACK60
}

/**
 * https://stackoverflow.com/a/7765814/1828637
 * Returns week number 0-51
 */
function getWeek(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date - oneJan) / 86400000) + oneJan.getDay() + 1) / 7) - 1;
}

/**
 * Will cycle image every X weeks.
 * Where X is the length of *ImagePaths.
 * Image paths must include final ending of _PERCENT-BLACK_OPACITY_BACKGROUND-SIZE.[png/jpg/etc]
 * Returns object of CSS background's.
 */
export function getWeekBackgroundStyles() {

    const topImagePaths = [BG10];
    const midImagePaths = [BG8, BG3, BG4];
    const botImagePaths = [BG7, BG5, BG6];

    const curWeek = getWeek(new Date());

    const imagePaths = [
        topImagePaths[curWeek % topImagePaths.length],
        midImagePaths[curWeek % midImagePaths.length],
        botImagePaths[curWeek % botImagePaths.length]
    ];

    const backgroundStyles = imagePaths.map(imagePath => {

        const backgroundSize = imagePath.match(/.*_(.*?)\./)[1];
        const blackPercent = imagePath.match(/.*_(\d\d)_.*?\./)[1];

        return {
            background: `url("${BLACK[blackPercent]}") repeat, url("${imagePath}")`,
            backgroundSize
        };

    });

    const [ topBackgroundStyle, midBackgroundStyle, botBackgroundStyle ] = backgroundStyles;

    return { botBackgroundStyle, midBackgroundStyle, topBackgroundStyle };
}
