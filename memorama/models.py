from django.db import models

class Player(models.Model):
    # id is set automatically
    user_name = models.CharField(null=True, blank=True, max_length=20)
    password = models.CharField(null=True, blank=True, max_length=20)
    best_time_easy_mode = models.IntegerField()
    best_time_regular_mode = models.IntegerField()
    best_time_hard_mode = models.IntegerField()

class Game(models.Model):
    # id is set automatically
    player_id = models.ForeignKey(Player, on_delete=models.SET_NULL, null=True, blank=True)
    ingame_time = models.IntegerField()
    difficulty = models.CharField(null=True, blank=True, max_length=15) # 'easy' - 'regular' - 'hard'
    pairs_number = models.IntegerField(null=True, blank=True)
    game_state = models.CharField(null=True, blank=True, max_length=15) # 'not_started' - 'playing' - 'finished'

class CardPair(models.Model):
    # id is set automatically
    topic = models.CharField(null=True, blank=True, max_length=15)
    concept = models.CharField(null=True, blank=True, max_length=15)
    definition = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

class Card(models.Model):
    # id is set automatically
    game_id = models.ForeignKey(Game, on_delete=models.SET_NULL, null=True, blank=True)
    card_pair_id = models.ForeignKey(CardPair, on_delete=models.SET_NULL, null=True, blank=True)
    card_concept = models.CharField(null=True, blank=True, max_length=15)
    card_definition = models.TextField(null=True, blank=True)
    card_image = models.ImageField(null=True, blank=True)