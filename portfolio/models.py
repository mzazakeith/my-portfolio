from django.db import models
from pyuploadcare.dj.models import ImageField


class Project(models.Model):
    cover_photo = ImageField()
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=500)
    role = models.CharField(max_length=300)
    live_link = models.CharField(max_length=500)



