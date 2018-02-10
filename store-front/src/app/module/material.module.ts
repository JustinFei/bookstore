import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatInputModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
			MatCheckboxModule,
			MatTabsModule,
			MatProgressSpinnerModule,
			MatTableModule,
			MatPaginatorModule,
			MatInputModule,
			MatListModule
			],
			
  exports: [MatButtonModule,
			MatCheckboxModule,
			MatTabsModule,
			MatProgressSpinnerModule,
			MatTableModule,
			MatPaginatorModule,
			MatInputModule,
			MatListModule
			],
})
export class MaterialModule { }