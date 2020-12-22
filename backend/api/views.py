from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection
from .models import messages

#import libraries
import sqlite3
import json


def addmessage(request):

    #transform request.body into Json   
    myObj = json.loads(request.body)

    newName=(myObj['name'])
    newMessage=(myObj['message'])

    newMessage = messages(name=newName, message=newMessage)
    newMessage.save()

    return JsonResponse({},status=200)

def getmessages(request):
    
    # get messages list from db 
    mlist = messages.objects.all()    
   
    #transform into a list
    result = list(mlist.values())
    
    return JsonResponse(result,safe=False)

def cleardb(request):
    
    #clear value from the db
    messages.objects.all().delete()

    return JsonResponse({},status=200)

