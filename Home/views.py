from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'home.html')


def sort(request):
    return render(request, 'sort.html')
