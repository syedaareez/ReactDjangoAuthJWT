from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, joinSerializer,joinedSerializer
from .models import Subject,JoinedClasses
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def CreateSubject(request):
    permission_classes = (IsAuthenticated,)
    serializer = joinSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        content=Subject.objects.get(code=request.data['code'])
        joinedby=JoinedClasses.objects.get(student=request.user.username)
        joinedby.subjects.add(content)

    return Response(serializer.data)

@api_view(['GET'])
def JoinSubject(request,pk):
    
    permission_classes = (IsAuthenticated,)
    content=Subject.objects.get(code=pk)
    joinedby=JoinedClasses.objects.get(student=request.user.username)
    joinedby.subjects.add(content)
    
    return Response("")
    

@api_view(['GET'])
def JoinedSubject(request):
    
    permission_classes = (IsAuthenticated,)
#     content=JoinedClasses.objects.get(student=request.user.username)
#     contents = content.subjects.all()
    
    contents=JoinedClasses.objects.filter(student=request.user.username)
    print(contents)
    serializer = joinedSerializer(contents, many=True )
    return Response(serializer.data)

@api_view(['GET'])
def AllSubject(request):
    
    permission_classes = (IsAuthenticated,)
#     content=JoinedClasses.objects.get(student=request.user.username)
#     contents = content.subjects.all()
    
    contents=Subject.objects.all()
    
    serializer = joinSerializer(contents, many=True )
    return Response(serializer.data)

@api_view(['GET'])
def LeaveSubject(request,pk):
    
    permission_classes = (IsAuthenticated,)
    
    content=Subject.objects.get(code=pk)
    
    joinedby=JoinedClasses.objects.get(student=request.user.username)
    joinedby.subjects.remove(content)
    
    
    return Response("")

    
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            a1=JoinedClasses(student=request.data["username"])
            a1.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
