(function(global){
    System.config({
        paths:{
            // pahs indicates alias
            "npm:": "node_modules/"
        },
        map: {
            // the app is in the app folder
            "app": "app",
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            "rxjs": "npm:rxjs",
            "angular-in-memory-web-api": 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        // packages tell the System loader how to load when no filename and/or no extensions
        packages: {
            app: {
                defaultExtension: "js",
                meta: {
                    "./*.js": { 
                        loader: "public/systemjs-angular-loader.js"
                    }
                }
            },
            rxjs: {
                defaultExtension: "js"
            }
        }    
    });

})(this);