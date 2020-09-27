import { Routes } from '@angular/router';

import { TestComponent } from '../test/test.component';
import { MaterialTestComponent } from '../material-test/material-test.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

export const routes:Routes =[
    // {
    //     path: 'Test', component: TestComponent
    // },
    {
        path: '', redirectTo: '/toolbar', pathMatch: 'full'
    },
    {
        path:'Material', component:MaterialTestComponent
    },
    {
        path:'toolbar',component:ToolbarComponent
    }
 ]; 