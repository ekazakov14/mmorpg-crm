import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { deleteProperty } from 'src/commons/deleteProperty';
import { User } from '../entities/user.entity';

@Injectable()
export class HideConfidentialCredentialsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((result: User | User[]) => {
        const deleteConfidentialCredentials = (obj: Record<string, any>) => {
          User.confidencialCredentials.forEach((key) => {
            deleteProperty(obj, key);
          });

          return obj;
        };

        if (Array.isArray(result)) {
          return result.map((item) => deleteConfidentialCredentials(item));
        } else {
          return deleteConfidentialCredentials(result);
        }
      }),
    );
  }
}
