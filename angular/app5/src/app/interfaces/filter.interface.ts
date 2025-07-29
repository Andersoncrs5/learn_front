import { EventEmitter, Output } from "@angular/core"

export class IFilterOptions {
    name: string | undefined
    startDate: Date | undefined
    endDate: Date | undefined
    status: boolean | undefined
}