import { LOCALE_ID, ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIModule } from "./";

@NgModule({
  imports: [
    FormsModule,
    ...UIModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...UIModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: LOCALE_ID,
          useValue: "id-ID",
        },
      ],
    };
  }
}
