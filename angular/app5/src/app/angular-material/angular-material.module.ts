import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations:[],
    exports: [
        MatListModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule, 
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ],
    imports: [
        MatListModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule, 
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class AngularMaterialModule{}