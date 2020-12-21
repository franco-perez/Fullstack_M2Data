from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection


from .models import messages

#call database
import sqlite3

import json


def addmessage(request):
    
      
    myObj = json.loads(request.body)

    newName=(myObj['name'])
    newMessage=(myObj['message'])

    newMessage = messages(user_name=newName, user_message=newMessage)
    newMessage.save()

    return JsonResponse({},status=200)

def getmessages(request):
    
    # get list of db 
    mlist = messages.objects.all()    
    
    #transform into a list
    result = list(mlist.values())
    
    return JsonResponse(result,safe=False)

def cleardb(request):

    messages.objects.all().delete()

    return JsonResponse({},status=200)

