from django.urls import path
from Home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('sort/', views.sort, name='sort'),
]
