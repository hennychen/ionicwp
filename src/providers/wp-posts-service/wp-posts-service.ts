import { Observable } from 'rxjs/Observable';
import { WpBaseServiceProvider } from './../wp-base-service/wp-base-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpPostsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpPostsServiceProvider extends WpBaseServiceProvider {

  private apiPostsURL: string = '/wp-json/wp/v2/posts'

  constructor(public http: HttpClient) {
    // console.log('Hello WpPostsServiceProvider Provider');
    super(http);
  }

  /**
   * 查询当前posts 数据
   * 
   * @param {any} searchParams 
   * @returns {Observable<any>} 
   * @memberof WpPostsServiceProvider
   */
  public searchPosts(searchParams): Observable<any> {
    let paramsObj = {
      'search': searchParams
    }
    return super.get<any>(this.apiPostsURL, paramsObj);
  }
}
