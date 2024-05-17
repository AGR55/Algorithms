from django.urls import path
from Orders import views

urlpatterns = [
    path('bubblesort/', views.bubble_sort, name='bubble_sort'),
    path('heapsort/', views.heap_sort, name='heap_sort'),
    path('insertionsort/', views.insertion_sort, name='insertion_sort'),
    path('mergesort/', views.merge_sort, name='merge_sort'),
    path('quicksort/', views.quick_sort, name='quick_sort'),
    path('selectionsort/', views.selection_sort, name='selection_sort'),
]
