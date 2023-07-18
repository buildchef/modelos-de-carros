import express, { Request, Response } from "express";

export class Controller{
    teste(req: Request, res: Response){
        res.status(200).json('Ta funcionando chefia');
    }
}