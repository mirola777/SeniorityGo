# Generated by Django 4.1.7 on 2023-03-27 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_profile_seniorities'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='seniority',
            unique_together={('name', 'level', 'organization')},
        ),
    ]