import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './HttpErrorInterceptor.service';

describe('Service: HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpErrorInterceptorService,
        { provide: ToastrService, useValue: { error: () => {} } }
      ]
    });
  });

  it('should be created', () => {
    expect(TestBed.inject(HttpErrorInterceptorService)).toBeTruthy();
  });
});
