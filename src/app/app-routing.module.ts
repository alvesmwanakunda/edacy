import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:"home",
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
    data:{preload:true}
  },

  {
    path:"login",
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private route:Router){
    this.route.errorHandler = (error:any)=>{
      console.log("Erreur avec la route.", error);
    }
  }
}
