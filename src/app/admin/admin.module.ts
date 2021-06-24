import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-dashboard/admin.route';

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule
    ],
    exports: []
})
export class AdminModule { }
