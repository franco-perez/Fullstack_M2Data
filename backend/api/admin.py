from django.contrib import admin

from .models import messages
# here can you enable data insert into your db
# Register your models here.

admin.site.register(messages)