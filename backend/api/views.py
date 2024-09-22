from django.shortcuts import render
from .models import User,Document,MyTrips
from .serializers import UserSerializer,RegistrationSerializer,MyTOPS,DocumentSerializer,MyTripsSerializer
# Create your views here.
from rest_framework.decorators import api_view,permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import status

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS
    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer
    
class DocumentView(generics.CreateAPIView):
    queryset = Document.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = DocumentSerializer
    
class MyTripsView(generics.CreateAPIView):
    queryset = MyTrips.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = MyTripsSerializer
    
class MyTripsListView(generics.ListAPIView):
    queryset = MyTrips.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = MyTripsSerializer
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protectedView(request):
    # output = f'Welcome {request.user}, Authentication successful.'
    
    # output = f'Welcome {request.user.username}, Authentication successful.'
    output = f'Welcome {request.user.profile.full_name}, Authentication successful.'
    
    return Response({"response":output},status=status.HTTP_200_OK)


@api_view(['GET'])
def view_all_routes(request):
    routes = [
        'api/token/refresh/',
        'api/register/',
        'api/document/',
        'api/mytrips/',
        'api/token/',
        ]
    
    return Response(routes)
