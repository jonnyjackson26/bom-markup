from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('get_books/', view=views.get_books, name="get_books")
]