from django.contrib import admin
from .models import Subject,JoinedClasses,Messages

# Register your models here.
admin.site.register(Subject)
admin.site.register(JoinedClasses)
admin.site.register(Messages)
