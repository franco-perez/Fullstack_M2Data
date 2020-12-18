from django.db import models

# tablas de DB y modelos de mi API
# Create your models here.
class Users_db(models.Model):
    user_id = models.AutoField(primary_key=True) # primary key, if not django creates it anyway
    user_name = models.CharField(max_length=50)
    user_message= models.CharField(max_length=140)

#class Meta:
#    db_table="messages"  