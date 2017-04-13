(function (global){
    System.config
    ({
        transpiler: "ts",
        typescriptOptions: {
            tsconfig: true
        },
        baseUrl: "/scripts",
        map: {
            jquery: 'https://code.jquery.com/jquery.js'  
        },
        
    });
})(this);