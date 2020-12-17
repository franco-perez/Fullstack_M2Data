from django.urls import path

from . import views

urlpatterns = [
    path('addmessage', views.addmessage, name='addmessage'),
    path('getmessages', views.getmessages, name='getmessages'),
    path('cleardb', views.cleardb, name='cleardb'),
    path('send_json',views.send_json, name='send_json'),
] 
