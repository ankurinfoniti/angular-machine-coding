import { HttpClient } from '@angular/common/http';
import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  reviewCount: number;
}

@Component({
  selector: 'app-filter-recipes',
  imports: [],
  templateUrl: './filter-recipes.html',
  styleUrl: './filter-recipes.css',
})
export class FilterRecipes implements OnInit {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  currentRating = signal(4);
  recipes = signal<Recipe[]>([]);
  carts = signal(0);
  filteredRecipes = computed(() =>
    this.recipes().filter((recipe) => recipe.rating >= this.currentRating()),
  );
  totalRecipes = computed(() => this.filteredRecipes().length);
  averageRecipe = computed(() => {
    const total = this.filteredRecipes().reduce((acc, recipe) => acc + recipe.rating, 0);
    return (total / this.filteredRecipes().length).toFixed(2);
  });

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.http
      .get<Recipe[]>('/data/recipes.json')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.recipes.set(value);
      });
  }

  filterRecipes(rating: string) {
    this.currentRating.set(+rating);
  }

  addToCart() {
    this.carts.update((value) => value + 1);
  }
}
