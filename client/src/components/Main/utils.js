import BG0 from './assets/chinh-le-duc-475924-unsplash.jpg'
import BG1 from './assets/john-moeses-bauan-632107-unsplash.jpg'
import BG2 from './assets/jonathan-kho-709591-unsplash.jpg'
import BG3 from './assets/mika-588573-unsplash.jpg'
import BG4 from './assets/peter-berko-270652-unsplash.jpg'
import BG5 from './assets/scott-umstattd-89611-unsplash.jpg'
import BG6 from './assets/yanni-panesa-216327-unsplash.jpg'

console.log('BG0:', BG0);

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
 * Where X is the length of *Image.
 * So if topImagePaths.length is 3, then top will cycle every 3 weeks.
 * If botImagePaths.length is 2, then bottom will cycle every 2 weeks.
 */
export function getWeekImagePaths() {

    const topImagePaths = [BG0, BG1, BG2];
    const midImagePaths = [BG3, BG4];
    const botImagePaths = [BG5, BG6];

    const curWeek = getWeek(new Date());

    return {
        topImagePath: topImagePaths[curWeek % topImagePaths.length],
        midImagePath: midImagePaths[curWeek % midImagePaths.length],
        botImagePath: botImagePaths[curWeek % botImagePaths.length]
    }
}
