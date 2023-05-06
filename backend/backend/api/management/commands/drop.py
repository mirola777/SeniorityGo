from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from api.models.admin import Admin
from api.models.developer import Developer
from api.models.organization import Organization
from api.models.requirement import Requirement
from api.models.seniority import Seniority
from api.models.profile import Profile
from api.models.profileseniority import ProfileSeniority
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.models.pokemon import Pokemon
from api.models.developerprofile import DeveloperProfile
from api.models.developerrequirement import DeveloperRequirement


class Command(BaseCommand):
    help = "Drops the database."



    def handle(self, *args, **options):
        self.stdout.write("Seeding data...")
        
        self.stdout.write("Deleting users...")
        User.objects.all().delete()
        self.stdout.write("Deleting developers...")
        Developer.objects.all().delete()
        self.stdout.write("Deleting admins...")
        Admin.objects.all().delete()
        self.stdout.write("Deleting organizations...")
        Organization.objects.all().delete()
        self.stdout.write("Deleting requirements...")
        Requirement.objects.all().delete()
        self.stdout.write("Deleting seniorities...")
        Seniority.objects.all().delete()
        self.stdout.write("Deleting profiles...")
        Profile.objects.all().delete()
        self.stdout.write("Deleting profile seniorities...")
        ProfileSeniority.objects.all().delete()
        self.stdout.write("Deleting profile seniority requirements...")
        ProfileSeniorityRequirement.objects.all().delete()
        self.stdout.write("Deleting pokemons...")
        Pokemon.objects.all().delete()
        self.stdout.write("Deleting developer profiles...")
        DeveloperProfile.objects.all().delete()
        self.stdout.write("Deleting developer requirements...")
        DeveloperRequirement.objects.all().delete()
        