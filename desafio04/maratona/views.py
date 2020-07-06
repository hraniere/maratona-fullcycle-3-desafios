from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from .models import Aula


def index(request):
    aulas = Aula.objects.all()
    return render(request, 'maratona/index.html', {'aulas': aulas})
