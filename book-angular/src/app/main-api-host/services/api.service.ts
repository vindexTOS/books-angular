import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/env'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.apiUrl

  GetData(searchQuery?: string) {
    console.log(searchQuery)
    return this.http.post(`${this.baseUrl}book-api/get-all`, { searchQuery })
  }
}
