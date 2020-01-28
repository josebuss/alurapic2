import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResoulver implements Resolve<Observable<Photo[]>>{
    constructor(private service: PhotoService) { }

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = router.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }
}