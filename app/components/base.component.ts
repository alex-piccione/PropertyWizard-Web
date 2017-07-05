import { Component } from "@angular/core";


export class BaseComponent
{

    public warning(message: string)
    {
        console.warn(message);
        alert("Warning. " + message);    
    }

    public error(message: string)
    {
        console.error(message);
        alert("Error. " + message);    
    }
}