import * as tCore from '@taiga-ui/core';
import * as tKit from '@taiga-ui/kit';
import * as tChart from '@taiga-ui/addon-charts';
import * as tTable from '@taiga-ui/addon-table';
import * as tTableBars from '@taiga-ui/addon-tablebars';
import { MatCardModule } from '@angular/material/card';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CountUpModule } from 'ngx-countup';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export const UIModule = [
    MatCardModule,
    CountUpModule,
    NgxDatatableModule,

    NgxChartsModule,
    ChartsModule,

    Ng2IziToastModule,
    PerfectScrollbarModule,
    MatSidenavModule,
    MatTooltipModule,
    TuiSidebarModule, TuiActiveZoneModule,

    tCore.TuiButtonModule,
    tCore.TuiCalendarModule,
    tCore.TuiCalendarSheetPipeModule,
    tCore.TuiColorModule,
    tCore.TuiDataListModule,
    tCore.TuiDescribedByModule,
    tCore.TuiDescribedByModule,
    tCore.TuiDialogModule,
    tCore.TuiDropdownBoxModule,
    tCore.TuiDropdownControllerModule,
    tCore.TuiDropdownModule,
    tCore.TuiErrorModule,
    tCore.TuiExpandModule,
    tCore.TuiFormatNumberPipeModule,
    tCore.TuiFormatPhonePipeModule,
    tCore.TuiGroupModule,
    tCore.TuiHintBoxModule,
    tCore.TuiHintControllerModule,
    tCore.TuiHintModule,
    tCore.TuiHintsHostModule,
    tCore.TuiHostedDropdownModule,
    tCore.TuiLabelModule,
    tCore.TuiLinkModule,
    tCore.TuiLoaderModule,
    tCore.TuiManualHintModule,
    tCore.TuiMaskAccessorModule,
    tCore.TuiModeModule,
    tCore.TuiMonthPipeModule,
    tCore.TuiNotificationAlertModule,
    tCore.TuiNotificationModule,
    tCore.TuiNotificationsModule,
    tCore.TuiPluralizePipeModule,
    tCore.TuiPointerHintModule,
    tCore.TuiPrimitiveCalendarModule,
    tCore.TuiPrimitiveCheckboxModule,
    tCore.TuiPrimitiveSpinButtonModule,
    tCore.TuiPrimitiveTextfieldModule,
    tCore.TuiPrimitiveYearPickerModule,
    tCore.TuiScrollControlsModule,
    tCore.TuiScrollIntoViewModule,
    tCore.TuiScrollbarModule,
    tCore.TuiSvgDefsHostModule,
    tCore.TuiSvgModule,
    tCore.TuiTableModeModule,
    tCore.TuiTextfieldControllerModule,
    tCore.TuiThemeNightModule,
    tCore.TuiTooltipModule,
    tCore.TuiWrapperModule,

    tKit.TuiAccordionModule,
    tKit.TuiActionModule,
    tKit.TuiArrowModule,
    tKit.TuiAvatarModule,
    tKit.TuiBadgeModule,
    tKit.TuiBadgedContentModule,
    tKit.TuiBreadcrumbsModule,
    tKit.TuiCalendarMonthModule,
    tKit.TuiCalendarRangeModule,
    tKit.TuiCheckboxBlockModule,
    tKit.TuiCheckboxLabeledModule,
    tKit.TuiCheckboxModule,
    tKit.TuiComboBoxModule,
    tKit.TuiDataListWrapperModule,
    tKit.TuiDropdownHoverModule,
    tKit.TuiDropdownSelectionModule,
    tKit.TuiFieldErrorModule,
    tKit.TuiFilterByInputPipeModule,
    tKit.TuiFilterModule,
    tKit.TuiHighlightModule, tKit.TuiInputCopyModule,
    tKit.TuiInputCountModule,
    tKit.TuiInputDateModule,
    tKit.TuiInputDateRangeModule,
    tKit.TuiInputDateTimeModule,
    tKit.TuiInputFileModule,
    tKit.TuiInputInlineModule,
    tKit.TuiInputModule,
    tKit.TuiInputMonthModule,
    tKit.TuiInputMonthRangeModule,
    tKit.TuiInputNumberModule,
    tKit.TuiInputPasswordModule,
    tKit.TuiInputPhoneInternationalModule,
    tKit.TuiInputPhoneModule,
    tKit.TuiInputRangeModule,
    tKit.TuiInputSliderModule,
    tKit.TuiInputTagModule,
    tKit.TuiInputTimeModule,
    tKit.TuiIslandModule,
    tKit.TuiLazyLoadingModule,
    tKit.TuiLineClampModule,
    tKit.TuiMarkerIconModule,
    tKit.TuiMultiSelectModule,
    tKit.TuiMultiSelectOptionModule,
    tKit.TuiPaginationModule,
    tKit.TuiPresentModule,
    tKit.TuiPrimitiveCalendarRangeModule,
    tKit.TuiProjectClassModule,
    tKit.TuiRadioBlockModule,
    tKit.TuiRadioGroupModule,
    tKit.TuiRadioLabeledModule,
    tKit.TuiRadioListModule,
    tKit.TuiRangeModule,
    tKit.TuiSelectModule,
    tKit.TuiSelectOptionModule,
    tKit.TuiSliderModule,
    tKit.TuiStepperModule,
    tKit.TuiTabsModule,
    tKit.TuiTagModule,
    tKit.TuiTextAreaModule,
    tKit.TuiToggleModule,
    tKit.TuiUnfinishedValidatorModule,
    tKit.TuiValueAccessorModule,

    tChart.TuiAxesModule,
    tChart.TuiBarChartModule,
    tChart.TuiBarModule,
    tChart.TuiBarSetModule,
    tChart.TuiLegendItemModule,
    tChart.TuiLineChartModule,
    tChart.TuiLineDaysChartModule,
    tChart.TuiPieChartModule,
    tChart.TuiRingChartModule,

    tTable.TuiReorderModule,
    tTable.TuiResizableColumnModule,
    tTable.TuiTableModule,
    tTable.TuiTablePaginationModule,

    tTableBars.TuiTableBarsHostModule
]