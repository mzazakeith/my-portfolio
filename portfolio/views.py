from django.shortcuts import render
import datetime


def get_year():
    current_year = datetime.datetime.now().year
    return current_year


def index(request):
    year = get_year()
    return render(request, 'index.html', locals())
