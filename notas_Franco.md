# Insert values into db SQlite3

for inserting the values directly in the db

```SQL
INSERT INTO messages (name,message)
VALUES('maria','Hi everyone');
```

## how to start  service

``` bash
#go to folder where is manage.py .
cd C:\Users\franc\Documents\Workspace_Github\Provided_Files\backend

#start the service
python manage.py runserver  

```

[imagen](..\Images_Documentation\Django_Framework.PNG)


## virtual environment

Encapsula todas las librrerias necesrarias para la aplicacion. Permite trabajr con dif. entronos virtuales

1. open bash-terminal
1. go to folder backend
2. pip install virtualenv (it does not matter where you run this command)
3. create a folder called virtualenv for leaving all environments variables and packages
4. cd to virtualenv folder
5.  create venv-> python -m venv backend
6. activate venv ->  source backend/Scripts/activate


# Quickdirty Start for Django

create virtualenv for repetibility

```bash
pip install virtualenv
# run python -m venv NAMN_YOUR_VIRT_ENV
python -m venv venvironment

# activate the env
source venvironment/Script/activate

# see your new env
pip freeze
```

install Django

```bash
pip install django

#or

pip install -r  requeriments.txt
```

# Create Django Project:wq

django-admin startproject mysite

Structure of a project

```
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
