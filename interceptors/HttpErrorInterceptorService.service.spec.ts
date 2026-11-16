/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpErrorInterceptorServiceService } from './HttpErrorInterceptorService.service';

describe('Service: HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptorServiceService]
    });
  });

  it('should ...', inject([HttpErrorInterceptorServiceService], (service: HttpErrorInterceptorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
