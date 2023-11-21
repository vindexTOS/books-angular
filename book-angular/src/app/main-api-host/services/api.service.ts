import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/app/env'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.apiUrl

  CreateBook(data: any) {
    console.log(data)
    return this.http.post(`${this.baseUrl}book-api/create`, { ...data })
  }

  GetData(searchQuery?: string) {
    return this.http.post(`${this.baseUrl}book-api/get-all`, {
      searchTerm: searchQuery,
    })
  }

  GetSingleBook({ id }: { id: string }) {
    return this.http.post(`${this.baseUrl}book-api/get-one/${id}`, {})
  }

  DeleteBook({ id }: { id: string }) {
    return this.http.post(`${this.baseUrl}book-api/delete/${id} `, {})
  }
}
