module.exports = {
    src_folders: ['./tests'],
    output_folder: './results',
    custom_assertions_path: '',
    page_objects_path: ['./pages'],
    globals_path: './globals.json',
    live_output: true,

    selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.8.1.jar',
        log_path: './results',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
        }
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost:3000',
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            silent: true,
            disable_colors: false,
            screenshots: {
                enabled: true,
                path: './results/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true
            }
        }
    }
};