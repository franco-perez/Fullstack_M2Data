# Backend notes

## Insert values into db SQlite3

for inserting the values directly in the db

```SQL
INSERT INTO messages (name,message)
VALUES('maria','Hi everyone');
```

## how to start  django service

``` bash
#go to folder where is manage.py .
cd C:\Users\franc\Documents\Workspace_Github\Provided_Files\backend

#start the service
python manage.py runserver  

```

## virtual environment creation

- contains all files and libraries needed for good working of the app.
- allows to work with differents programs version (on computer:python3 on environment: python2)

1. open bash-terminal
2. go to folder backend
3. pip install virtualenv (it does not matter where you run this command)
4. create a folder called virtualenv for leaving all environments variables and packages
5. cd to virtualenv folder
6. create venv-> python -m venv backend
7. activate venv ->  source backend/Scripts/activate

## Quickdirty Start for Django

```bash
# activate the virtual environment
source virtualenv/backend/Scripts/activate

#start the service
python manage.py runserver  

```

create virtualenv for repetibility

```bash
pip install virtualenv
# run python -m venv NAMN_YOUR_VIRT_ENV
python -m venv venvironment

# activate the env
source virtualenv/backend/Scripts/activate

#start the service
python manage.py runserver  


# see your new env
pip freeze
```

## install Django

```bash
pip install django

#or

pip install -r  requeriments.txt
```

## Create Django Project:wq

```bash
#cmd or bash

#run created virtual environment 
source virtualenv/backend/Scripts/activate

#name of project "backend"
django-admin startproject backend

#go to created project folder
cd backend

# name of your aplication
manage.py startapp API

```

go to backend-> settings.py and add your aplication (Api) like shown

```bash
Installed_APP = [
    ...
    ...
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',        
]
```

## in file Urls.py

add aplication path (path from api) to urlpatterns

```bash
#add
from django.urls import include

urlpatterns = [
    ...
    ...
    #add this line
    path('api/', include('api.urls')),
]
```

## data structures on models.py

all information needed to configurate db (can change db going to setting.py and selecting another db, standard is sqlite3)

models are defined as classes

```bash
class messages(models.Model):
    #user_id = models.AutoField(primary_key=True) # primary key, if not django creates it anyway
    user_name = models.CharField(max_length=100, primary_key=True)
    user_message= models.CharField(max_length=140)
```

### Structure of a project

```bash
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py # Asynchronous Server Gateway Interface
        wsgi.py # Web Server Gateway Interface
```

These files are:

- The outer mysite/ root directory is a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.
- manage.py: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py.
- The inner mysite/ directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. mysite.urls).
- mysite/**init**.py: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.
- mysite/settings.py: Settings/configuration for this Django project. Django settings will tell you all about how settings work.
- mysite/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.
- mysite/asgi.py: An entry-point for ASGI-compatible web servers to serve your project. See How to deploy with ASGI for more details.
- mysite/wsgi.py: An entry-point for WSGI-compatible web servers to serve your project. See How to deploy with WSGI for more details.

## run makemigrations Django

in backend folder in command cmd

 ```cmd
python manage.py makemigrations
```

or

```bash
py manage.py makemigrations
```

db3 will be created

in migration should appear sthing like "0001_initial.py"

## make migration (translate into SQL)

```bash
py manage.py migrate

# create a superuser
py manage.py createsuperuser


#start the service
py manage.py runserver  
```

after this you should see in your db the created keys (name,message)

## API testing with insomnia core

``` bash
download insomnia core from https://insomnia.rest/products/core/

after installing and opening go to 

ctrl+n

```

## Git commands

problems with -gitignore? then..

```bash
# after git add .
git rm --cached name_of_file
```
