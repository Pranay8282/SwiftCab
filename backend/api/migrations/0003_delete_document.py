# Generated by Django 5.0.7 on 2024-08-25 15:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_document_user_delete_profilephoto'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Document',
        ),
    ]
