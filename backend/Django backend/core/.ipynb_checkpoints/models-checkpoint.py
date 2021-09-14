from django.db import models
from datetime import datetime
# Create your models here.

class Subject(models.Model):
    title=models.CharField(blank=True,max_length=200)
    code=models.CharField(blank=True,max_length=12)
    author=models.CharField(blank=True ,max_length=50)
    
    def __str__(self):
        return self.title
    
class JoinedClasses(models.Model):
    student=models.CharField(max_length=50)
    subjects=models.ManyToManyField(Subject)
    def __str__(self):
        return self.student
    
class Messages(models.Model):
    subcode=models.CharField(max_length=12)
    author=models.CharField(blank=True ,max_length=50)
    date = models.DateTimeField(auto_now_add=True,blank=True)
    text=models.TextField(max_length=500)
    def __str__(self):
        return self.subcode