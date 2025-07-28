import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetails } from './user-details/user-details';
import { Filter } from './filter/filter';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersList } from './users-list/users-list';
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [
    UserDetails,
    Filter,
    UsersList,
    
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    UserDetails,
    Filter,
    FormsModule,
    CommonModule,
    UsersList,
    PipesModule
  ]
})
export class ComponentsModule {

}