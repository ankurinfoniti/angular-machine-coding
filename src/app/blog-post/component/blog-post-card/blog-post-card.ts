import { Component, Input } from '@angular/core';

import { BlogPostModel } from '../../model/blog-post-model';

@Component({
  selector: 'app-blog-post-card',
  imports: [],
  templateUrl: './blog-post-card.html',
  styleUrl: './blog-post-card.css',
})
export class BlogPostCard {
  @Input({ required: true }) blog!: BlogPostModel;
}
