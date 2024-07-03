import { TestBed } from '@angular/core/testing';

import { Post } from './post.service';

describe('PostService', () => {
  let service: Post;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
