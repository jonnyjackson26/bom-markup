from django.shortcuts import render
from django.conf  import settings
import json
import os
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .books_data import books 

# Load manifest when server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/core/static/manifest.json")
    MANIFEST = json.load(f)

# Create your views here.
@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["css"][0]
    }
    return render(req, "core/index.html", context)


 


 
@login_required
def get_books(request):
    # Convert the Book objects to dictionaries
    books_data = [book.to_dict() for book in books]
    return JsonResponse(books_data, safe=False)



def get_book(request, book_name):
    # Find the book directly by its url_name
    book = next((book for book in books if book.url_name == book_name), None)
    
    if not book:
        return JsonResponse({"error": "Book not found"}, status=404)

    return JsonResponse(book.to_dict())  # Return the book data as a dictionary