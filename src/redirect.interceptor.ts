import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class RedirectInterceptor implements NestInterceptor {
    constructor(private readonly target: string) {}

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const response = context.switchToHttp().getResponse();
        response.redirect(this.target);
        return next.handle().pipe(tap(() => console.log(`Redirected To ${this.target}`)));
    }

}