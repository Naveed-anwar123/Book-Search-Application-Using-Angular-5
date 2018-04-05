import { TestBed, inject } from '@angular/core/testing';

import { BookContainerService } from './book-container.service';

describe('BookContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookContainerService]
    });
  });

  it('should be created', inject([BookContainerService], (service: BookContainerService) => {
    expect(service).toBeTruthy();
  }));
});
