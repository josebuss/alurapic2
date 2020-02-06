import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResoulver } from './photos/photo-list/photo-list.resolver';
import { SingInComponent } from './home/sing-in/sing-in.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SingInComponent
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
        ]
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResoulver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
            //, { useHash: true } //para utilizar nas url o '#'
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule { }