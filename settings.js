/**
 * This is the default settings file provided by Node-RED.
 *
 * It can contain any valid JavaScript code that will get run when Node-RED
 * is started.
 *
 * Lines that start with // are commented out.
 * Each entry should be separated from the entries above and below by a comma ','
 *
 * For more information about individual settings, refer to the documentation:
 *    https://nodered.org/docs/user-guide/runtime/configuration
 *
 * The settings are split into the following sections:
 *  - Flow File and User Directory Settings
 *  - Security
 *  - Server Settings
 *  - Runtime Settings
 *  - Editor Settings
 *  - Node Settings
 *
 **/

module.exports = {

/*******************************************************************************
 * Flow File and User Directory Settings
 ******************************************************************************/

    flowFile: 'flows.json',
    //credentialSecret: "a-secret-key",
    flowFilePretty: true,
    //userDir: '/home/nol/.node-red/',
    //nodesDir: '/home/nol/.node-red/nodes',

/*******************************************************************************
 * Security
 ******************************************************************************/
    httpAdminRoot: "/admin",
    httpNodeRoot: "/",

    ui: {
        path: "run"
    },

    httpNodeMiddleware: function (req, res, next) {
        if (req.url === "/") {
            res.redirect("/dashboard");
        } else {
            next();
        }
    },

    //adminAuth: {
        //type: "credentials",
        //users: [{
            //username: "admin",
            //password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
            //permissions: "*"
        //}]
    //},

    //https: {
    //  key: require("fs").readFileSync('privkey.pem'),
    //  cert: require("fs").readFileSync('cert.pem')
    //},

/*******************************************************************************
 * Server Settings
 ******************************************************************************/

    uiPort: process.env.PORT || 1880,
    //uiHost: "127.0.0.1",

/*******************************************************************************
 * Runtime Settings
 ******************************************************************************/

    diagnostics: {
        enabled: true,
        ui: true,
    },

    runtimeState: {
        enabled: false,
        ui: false,
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    //contextStorage: {
    //    default: {
    //        module:"localfilesystem"
    //    },
    //},

    exportGlobalContextKeys: false,

    externalModules: {
        // Configuration here
    },

/*******************************************************************************
 * Editor Settings
 ******************************************************************************/
editorTheme: {
    theme: {
        name: "ADIENT"
    },
    palette: { },
    projects: {
        enabled: true
    },
    codeEditor: {
        lib: "monaco",
        options: {
            theme: "vs-dark"
        }
    },
    markdownEditor: {
        mermaid: {
            enabled: true
        }
    }
},

/*******************************************************************************
 * Node Settings
 ******************************************************************************/

    //fileWorkingDirectory: "",
    functionExternalModules: true,
    functionTimeout: 0,
    // Other node settings...

};
