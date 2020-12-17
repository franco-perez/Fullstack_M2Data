from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection

import json

def send_json(request):
        
    data = [{'name': 'Peter', 'email': 'peter@example.org'},
            {'name': 'Julia', 'email': 'julia@example.org'}]

    return JsonResponse(data, safe=False)


def addmessage(request):
    # formato json 
    # ingresar a la base de datos
    return JsonResponse({},status=200)

def getmessages(request):
    # espera evento Javascript
    # get list of db 
    # send it to javascript in JSonformat
    
    result = {}
    return JsonResponse(result,status=200)

def cleardb(request):
    # DELETE
    # borrar mjes de la base de datos
    return JsonResponse({},status=200)

