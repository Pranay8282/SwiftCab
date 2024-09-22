from django.urls import path,include
from rest_framework_simplejwt.views import (TokenRefreshView)
from . import views
urlpatterns = [
    path('token/',views.MyTokenObtainPairView.as_view(),name='token-obtain'),
    path('token/refresh/',TokenRefreshView.as_view(),name='refresh-token'),
    path('register/',views.RegisterView.as_view(),name='register-user'),
    path('document/',views.DocumentView.as_view(),name='document-view'),
    path('mytrips/',views.MyTripsView.as_view(),name='trips-view'),
    path('mytrips-list/',views.MyTripsListView.as_view(),name='trips-view'),
    path('test/',views.protectedView,name='test'),
    path('',views.view_all_routes,name='all-routes'),
]
