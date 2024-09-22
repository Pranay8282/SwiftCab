from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique = True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def profile(self):
        profile = Profile.objects.get(user=self)
        

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    bio = models.CharField(max_length=1000)
    verified = models.BooleanField(default = False)
    
class Document(models.Model):
    email = models.EmailField()
    driving_license_num = models.CharField(max_length=15)
    adhaar_num = models.CharField(max_length=12)
    pan_number = models.CharField(max_length=10)
    license_plate = models.CharField(max_length=10)
    
class MyTrips(models.Model):
    email = models.EmailField()
    pickup = models.CharField(max_length=500)
    dropoff = models.CharField(max_length=500)
    paymentMethod = models.CharField(max_length=10)
    dateTime = models.CharField(max_length=250)
    distance = models.CharField(max_length=10)
    duration = models.CharField(max_length=20)
    price = models.CharField(max_length=20)

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    # instance.document.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)