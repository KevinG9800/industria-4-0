from django.shortcuts import render
from .models import Player, Game, CardPair, Card # Imports all the database tables

# Create your views here.

def test(request):
    player_list = Player.objects.all()
    return render(request, 'test.html', {
        'player_list': player_list,
    })

def index(request):
    return render(request, 'index.html')

def game(request):
    card_pair_list = CardPair.objects.all()
    card_list = Card.objects.all()
    return render(request, 'game.html', {
        'card_pair_list': card_pair_list,
    })

def info(request):
    return render(request, 'info.html')