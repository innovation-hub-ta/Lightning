
import {
    Home, Settings, Downloads, NotFound, Error
} from '../pages';
import { Animation } from '../pages/Animation';
import Test from '../pages/test';


export default {

    root: 'home',

    routes: [
        {
            // this is a one level deep route.
            path: 'home',
            // define the attached Component that the Router will show
            // on this route. If configured the Router will create an instance
            component: Home,
            widgets: ['Menu']

        },
        {
            path: 'downloads',
            component: Downloads,
            widgets: ['Menu']
        },
        {
            path: 'animation',
            component: Animation,
            widgets: ['Menu']
        },

        {
            path: 'settings',
            component: Settings,
            widgets: ['Menu']
        },
        {
            path: 'test',
            component: Test,
            widgets: ['Menu']
        },
        {
            path: '*',
            component: NotFound,
        },
        {
            path: '!',
            component: Error
        }
    ],
    beforeEachRoute: async (from, to) => {
        return true;
    }
}