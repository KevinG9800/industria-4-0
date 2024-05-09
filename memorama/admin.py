from django.contrib import admin
from .models import Player, Game, CardPair, Card


# Register your models here.
admin.site.register(Player)
admin.site.register(Game)
admin.site.register(CardPair)
admin.site.register(Card)