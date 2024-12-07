import * as express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                username: string;
                roleId: string;
                roleName: string;
                
            };
        }
    }
}

