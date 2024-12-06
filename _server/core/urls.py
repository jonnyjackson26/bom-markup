from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('get_books/', view=views.get_books, name="get_books"),
    path('get_books/<str:book_name>/', views.get_book, name='get_book'),  # Fetch a specific book by its URL name
]