from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection

#from django.views import View
from .models import messages

#call database
import sqlite3

import json

#class MessagesView(View):

def send_json(request):
    
    #get values from db
    #logica correspndiente a la API

    data = [{'name': 'Peter', 'email': 'peter@example.org'},
                {'name': 'Julia', 'email': 'julia@example.org'}]

    return JsonResponse(data, safe=False)



def addmessage(post, myObj):
    # formato json 
    name_JS=(myObj['name'])
    message_JS=(myObj['message'])

    #user_name_instansce= messages.user_name.objects.creates(name=name_JS)
   # user_message_instansce=messages.user_message.objects.creates(message=message_JS)

    return JsonResponse({},status=200)

def getmessages(request):
    # espera evento Javascript


    # get list of db 
    mlist = messages.objects.all()    
    
    #transform Jquery into a list
    result = list(mlist.values())
    
    #transform list into json
    #result = json.dumps(result)
    #  print(result)
    #return JsonResponse(list,status=200)
    return JsonResponse(result,safe=False)

def cleardb(request):
    # DELETE
    # borrar mjes de la base de datos
    return JsonResponse({},status=200)

