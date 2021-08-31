from django.db import models
from datetime import datetime
# Create your models here.

class Subject(models.Model):
    title=models.CharField(blank=True,max_length=200)
    code=models.CharField(blank=True,max_length=12)
    author=models.CharField(blank=True ,max_length=50)
    
    def __str__(self):
        return self.title