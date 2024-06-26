from django.db import models

class Player(models.Model):
    # id is set automatically
    user_name = models.CharField(null=True, blank=True, max_length=20)
    password = models.CharField(null=True, blank=True, max_length=20)
    best_time_easy_mode = models.IntegerField()
    best_time_regular_mode = models.IntegerField()
    best_time_hard_mode = models.IntegerField()

    def __str__(self):
        return str(self.id) + ' - ' + self.user_name

class Game(models.Model):
    # id is set automatically
    player_id = models.ForeignKey(Player, on_delete=models.SET_NULL, null=True, blank=True)
    ingame_time = models.IntegerField()
    difficulty = models.CharField(null=True, blank=True, max_length=15) # 'easy' - 'regular' - 'hard'
    pairs_number = models.IntegerField(null=True, blank=True)
    game_state = models.CharField(null=True, blank=True, max_length=15) # 'not_started' - 'playing' - 'finished'

    def __str__(self):
        return str(self.id) + ' - ' + str(self.player_id)
    
class CardPair(models.Model):
    # id is set automatically
    topic = models.CharField(null=True, blank=True, max_length=20)
    concept = models.CharField(null=True, blank=True, max_length=20)
    definition = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.topic + ' - ' + self.concept
    
class Card(models.Model):
    # id is set automatically
    game_id = models.ForeignKey(Game, on_delete=models.SET_NULL, null=True, blank=True)
    card_pair_id = models.ForeignKey(CardPair, on_delete=models.SET_NULL, null=True, blank=True)
    card_concept = models.CharField(null=True, blank=True, max_length=15)
    card_definition = models.TextField(null=True, blank=True)
    card_image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return str(self.game_id + ' - ' + self.card_concept)