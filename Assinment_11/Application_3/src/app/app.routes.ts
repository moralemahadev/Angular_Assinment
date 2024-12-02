import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

export const routes: Routes = [

    {
        path:'technologie',
        component:TechnologiesComponent
    },
    {
        path:'books',
        component: BooksComponent
    },
    
    {  
        ////Default route when we opne page first
        path:'',
        redirectTo:'/technologie',
        pathMatch: "full"

    },
    {
       // Wildcard routes for the wrong choise
        path: "**",
        component: PageNotFoundComponentComponent
    }
    
    
];
