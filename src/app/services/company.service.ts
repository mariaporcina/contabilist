import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) { }

  async addCompany(companyData: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.http.post(this.apiUrl, companyData));
      return response;
    } catch (error) {
      throw error;
    }
  }

  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCompanyDetails(companyId: string): Observable<any> {
    const url = `${this.apiUrl}/${companyId}`;
    return this.http.get<any>(url);
  }

  updateCompany(companyId: string, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${companyId}`;
    return this.http.put<any>(url, updatedData);
  }

  deleteCompany(companyId: string): Observable<any> {
    const url = `${this.apiUrl}/${companyId}`;
    return this.http.delete<any>(url);
  }
}
