from django.db import models

# tablas de DB y modelos de mi API
# Create your models here.
class messages(models.Model):
    name = models.CharField(max_length=100)
    message= models.CharField(max_length=140)

  