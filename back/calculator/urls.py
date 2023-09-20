# calculator/urls.py

from django.urls import path
from . import api

urlpatterns = [
    path('solve/', api.LinearProgrammingView.as_view(), name='solve'),
]
