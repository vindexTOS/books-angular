import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import * as data from '../dummy-data/Data.json'
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  jsonData!: any[]

  constructor(private http: HttpClient) {
    this.loadDataFromLocalStorage()
  }
  private loadDataFromLocalStorage(): void {
    const storedData: any = localStorage.getItem('appData')
    let rawdata = JSON.parse(storedData)
    if (storedData && rawdata.length > 0) {
      this.jsonData = JSON.parse(storedData)
    } else {
      this.jsonData = (data as any).default

      this.saveDataToLocalStorage()
    }
  }
  private saveDataToLocalStorage(): void {
    const storedData = localStorage.getItem('appData')
    console.log(storedData)

    localStorage.setItem('appData', JSON.stringify(this.jsonData))
  }

  updateData(newData: any[]): void {
    this.jsonData = newData
    this.saveDataToLocalStorage()
  }

  deletItem(id: string) {
    let newdata = this.jsonData.filter((val: any) => val.id !== id)
    localStorage.setItem('appData', JSON.stringify(newdata))
    this.loadDataFromLocalStorage()
  }
}
