from django.db import models

# Create your models here.
class Users_db(models.Model):
    user_id = models.CharField(max_length=30) # constrain leng ht user to 30 charachter 
    user_name = models.CharField(max_length=30)
    user_message= models.CharField(max_length=140)

class Meta:
    db_table="messages" 