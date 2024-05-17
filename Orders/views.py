from django.shortcuts import render


# Create your views here.
def bubble_sort(request):
    return render(request, 'bubble_sort.html')


def heap_sort(request):
    return render(request, 'heap_sort.html')


def insertion_sort(request):
    return render(request, 'insertion_sort.html')


def merge_sort(request):
    return render(request, 'merge_sort.html')


def quick_sort(request):
    return render(request, 'quick_sort.html')


def selection_sort(request):
    return render(request, 'selection_sort.html')
