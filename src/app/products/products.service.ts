
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Employee } from 'app/employee/employee.model';
import { Observable } from 'rxjs';
import { Products } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private httpClient: HttpClient
    ) { }

    saveProductsList(admin: Products): Observable<any> {
        return this.httpClient.post<any>(ApiService.saveProductsListURL, admin);
    }
    getAllProductsList(): Observable<Products[]> {
        return this.httpClient.get<any>(ApiService.getAllProductsListURL);
    }
    removeProductDetails(id) {
        return this.httpClient.get<any>(ApiService.removeProductDetailsURL + id);
    }
    updateProductList(admin: Products): Observable<any[]> {
        return this.httpClient.post<any>(ApiService.updateProductListURL, admin);
    }
    selectUploadImage(img): Observable<any> {
        debugger
        return this.httpClient.post<any>(ApiService.uploadMainImageURL, img);

    }
    selectMultiUploadImage(img): Observable<any> {
        return this.httpClient.post<any>(ApiService.uploadMultiImageURL, img);
    }
    removeOrChanged() {
        return this.httpClient.get<any>(ApiService.removeImageURL);
    }
}
