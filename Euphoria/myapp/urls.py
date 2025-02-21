from django.urls import path
from .views import CustomAuthToken, logout_view

urlpatterns = [
    path('api/login/', CustomAuthToken.as_view(), name='api-login'),
    path('api/logout/', logout_view, name='api-logout'),
]
