import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        console.log("Guard...");
        const request: Request = context.switchToHttp().getRequest();
        const isAuth = request.headers.authorization === "secret";
        if(!isAuth) throw new UnauthorizedException("Not authorized");
        return isAuth;
    }
}