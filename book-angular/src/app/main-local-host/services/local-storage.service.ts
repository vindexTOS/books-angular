import { EventEmitter, Injectable } from '@angular/core'
import * as data from '../dummy-data/Data.json'
import { Store } from '@ngrx/store'
import { GetLocalStorageData } from 'src/app/Store/LocalStorage/Local.action'
import { GetStatusSuccsess } from 'src/app/Store/StatusHanndle/Status.selector'
import { statusSuccses } from 'src/app/Store/StatusHanndle/Status.action'
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  jsonData!: any[]
  dataUpdated: EventEmitter<void> = new EventEmitter<void>()

  constructor(private store: Store) {
    this.loadDataFromLocalStorage()
  }
  private loadDataFromLocalStorage(): void {
    const storedData: any = localStorage.getItem('appData')
    let rawdata = JSON.parse(storedData)
    if (storedData && rawdata.length > 0) {
      this.jsonData = JSON.parse(storedData)
      this.store.dispatch(GetLocalStorageData({ bookData: this.jsonData }))
    } else {
      this.jsonData = (data as any).default
      this.store.dispatch(GetLocalStorageData({ bookData: this.jsonData }))
      this.saveDataToLocalStorage()
    }
  }
  private saveDataToLocalStorage(): void {
    const storedData = localStorage.getItem('appData')
    console.log(storedData)
    this.dataUpdated.emit()
    localStorage.setItem('appData', JSON.stringify(this.jsonData))
  }

  updateData(newData: any[]): void {
    this.jsonData = newData
    this.store.dispatch(GetLocalStorageData({ bookData: this.jsonData }))

    this.saveDataToLocalStorage()
  }

  deletItem(id: string) {
    let newdata = this.jsonData.filter((val: any) => val.id !== id)
    this.store.dispatch(GetLocalStorageData({ bookData: newdata }))

    localStorage.setItem('appData', JSON.stringify(newdata))
    this.loadDataFromLocalStorage()
    this.store.dispatch(
      statusSuccses({ succses: 'Item Has Been Delated Successfully' }),
    )
    setTimeout(() => {
      this.store.dispatch(statusSuccses({ succses: '' }))
    }, 2000)
  }
}
