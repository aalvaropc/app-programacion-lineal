from django.urls import path
from . import api

urlpatterns = [
    path('solve-linear-programming/', api.LinearProgrammingView.as_view(), name='solve-linear-programming'),
]