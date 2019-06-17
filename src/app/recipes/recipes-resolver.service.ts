import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<any>
{
    constructor(private dataStorageService: DataStorageService){}
    
    resolve(route: ActivatedRouteSnapshot):Observable<any> {
            return this.dataStorageService.fetchRecipes();
      }
    
}