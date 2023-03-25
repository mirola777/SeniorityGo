# Generated by Django 4.1.7 on 2023-03-25 00:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_organization_profiles_profile_organization'),
    ]

    operations = [
        migrations.AddField(
            model_name='seniority',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='seniorities', to='api.organization'),
            preserve_default=False,
        ),
    ]
