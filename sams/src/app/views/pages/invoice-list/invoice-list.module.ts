import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { PortletModule } from '../../partials/content/general/portlet/portlet.module';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';


const routes: Routes = [
	{
		path: '',
		component: InvoiceListComponent,
		children: [
			{
				path: '',
				redirectTo: 'invoice-app',
				pathMatch: 'full'
			},
			{
				path: 'invoice-create',
				component: InvoiceComponent
            },
            {
				path: 'invoice-list',
				component: InvoicelistComponent
			},
		]
	}
];

@NgModule({
  declarations: [InvoiceListComponent, InvoiceComponent, InvoicelistComponent, InvoiceViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    ReactiveFormsModule,
    MatInputModule,
	MatFormFieldModule,
	MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatRadioModule,
	MatSelectModule,
	FormsModule,
	TranslateModule.forChild(),
	MatMenuModule,
	MatTableModule,
	MatAutocompleteModule,
	MatIconModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatCardModule,
	MatPaginatorModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatExpansionModule,
	MatTabsModule,
	MatTooltipModule,
    MatDialogModule,
    PortletModule,
	RouterModule.forChild(routes),
  ],
  entryComponents: [
	InvoiceViewComponent,InvoiceListComponent
  ]
})
export class InvoiceListModule { }
