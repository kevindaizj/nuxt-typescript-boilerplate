
const isDev = () => process.env.NODE_ENV !== 'production';

export class AppConfigs {

    static UI_HOST = 'localhost';
    static UI_PORT = 3003;


    static HTTPS = isDev() ? true : false;
    static API_HOST = isDev() ? 'devappapi.bolierplate.com' : 'localhost';
    static API_PORT = isDev() ? 443 : 8011;


    static AXIOS_BROWSER_HOST = isDev() ? 'localhost' : 'devweb.bolierplate.com';
    static AXIOS_BROWSER_PORT = isDev() ? 3003 : 443;
    static AXIOS_BROWSER_HTTPS = isDev() ? false : true;

    static API_TOKEN = '685548820E2FE8956549D3D36699dsd7443D';

    static agentHost = 'http://127.0.0.1:1080';
}