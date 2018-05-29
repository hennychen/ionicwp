import { WpPostsServiceProvider } from './../../providers/wp-posts-service/wp-posts-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private wppostservice:WpPostsServiceProvider) {

    this.wppostservice.searchPosts('txt').subscribe(res=>{
      console.log(res);
    });
  }

}
