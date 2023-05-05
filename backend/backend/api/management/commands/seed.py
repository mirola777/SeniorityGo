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

import random
from faker import Faker



class Command(BaseCommand):
    help = "Seeds the database."

    organizations = [
        "Microsoft Corporation",
        "Oracle Corporation",
        "IBM Corporation",
        "SAP SE",
        "Salesforce.com, Inc.",
        "Hewlett Packard Enterprise Company",
        "Dell Technologies Inc.",
        "Cisco Systems, Inc.",
        "Amazon Web Services, Inc.",
        "Google LLC",
        "Apple Inc.",
        "Intel Corporation",
        "VMware, Inc.",
        "Adobe Inc.",
        "Accenture plc",
        "Fujitsu Limited",
        "NTT Data Corporation",
        "Tata Consultancy Services Limited",
        "Infosys Limited",
        "Wipro Limited"
    ]

    seniorities = [
        "Junior",
        "Middle",
        "Senior",
        "Lead",
        "Principal"
    ]

    requirements = [
        "Proficiency in Java",
        "Proficiency in Python",
        "Proficiency in JavaScript",
        "Experience in web development",
        "Experience in mobile development",
        "Experience in desktop development",
        "Experience in databases",
        "Experience in Git",
        "Experience in Docker",
        "Experience in Kubernetes",
        "Knowledge of AWS",
        "Knowledge of Azure",
        "Knowledge of Google Cloud Platform",
        "Experience in Agile methodologies",
        "Experience in DevOps practices",
        "Knowledge of RESTful APIs",
        "Knowledge of microservices",
        "Knowledge of machine learning",
        "Experience in test-driven development",
        "Experience in continuous integration and delivery",
        "Experience in project management",
        "Strong problem-solving skills",
        "Good communication skills",
        "Ability to work in a team",
        "Ability to work under pressure",
        "Willingness to learn",
        "Attention to detail",
        "Critical thinking",
        "Creativity"
    ]

    profiles = [
        "Backend Developer",
        "Frontend Developer",
        "Fullstack Developer",
        "Mobile Developer",
        "Desktop Developer",
        "Quality Assurance Engineer",
        "DevOps Engineer",
        "Cloud Engineer",
        "Data Engineer",
        "Machine Learning Engineer",
        "Technical Lead",
        "Architect",
        "Product Manager",
        "UI/UX Designer",
        "Data Scientist"
    ]
    
    def add_arguments(self, parser):
        parser.add_argument("username", nargs="+", type=str)
        parser.add_argument("password", nargs="+", type=str)

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
        
        faker = Faker()
        is_my_organization = False

        # Create organizations
        for org in random.sample(self.organizations, 6):
            self.stdout.write(f"Creating organization {org}...")
            organization = Organization.objects.create(name=org)
            
            self.stdout.write(f"Creating organization requirements...")
            
            # Create requirements
            organization_requirements = []
            for req in random.sample(self.requirements, 10):
                requirement = Requirement.objects.create(description=faker.text(), name=req, points=random.randint(50, 1000), organization=organization)
                organization_requirements.append(requirement)
                
            self.stdout.write(f"Creating organization seniorities...")
                
            # Create seniorities
            organization_seniorities = []
            level = 1
            for sen in self.seniorities:
                seniority = Seniority.objects.create(name=sen, organization=organization, level=level)
                organization_seniorities.append(seniority)
                level += 1
                
            self.stdout.write(f"Creating organization profiles...")
                
            # Create profiles
            organization_profiles = []
            for prof in random.sample(self.profiles, 5):
                profile = Profile.objects.create(name=prof, description=prof, organization=organization)
                organization_profiles.append(profile)
                
            self.stdout.write(f"Assinging seniorities to profiles...")
            
            organization_profileseniorities = []
            for profile in organization_profiles:
                for seniority in organization_seniorities:
                    pokemon, _ = Pokemon.objects.get_or_create(pk=random.randint(1, 151))
                    profileseniority = ProfileSeniority.objects.create(profile=profile, seniority=seniority, pokemon=pokemon)
                    organization_profileseniorities.append(profileseniority)
                    
            self.stdout.write(f"Assinging requirements to profilesseniorities...")
            
            for profileseniority in organization_profileseniorities:
                for requirement in random.sample(organization_requirements, 3):
                    ProfileSeniorityRequirement.objects.create(profile_seniority=profileseniority, requirement=requirement)
                    
                
            self.stdout.write(f"Creating organization developers...")
                
            # Create developers
            organization_developers = []
            for i in range(1, 10):
                user = User.objects.create_user(username=faker.user_name(), password=faker.password(), email=faker.email())
                developer = Developer.objects.create(user=user, organization=organization, first_name=faker.first_name(), last_name=faker.last_name(), phone_number=faker.phone_number(), birthday="2002-11-25")
                organization_developers.append(developer)
                
            self.stdout.write(f"Assinging profiles to developers...")
            
            organization_developerprofiles = []
            for developer in organization_developers:
                for profile in random.sample(organization_profiles, 3):
                    seniority = random.choice(organization_seniorities)
                    
                    #CREATE DEVELOPER PROFILE
                    developer_profile = DeveloperProfile.objects.create(developer=developer, profile=profile, seniority=seniority)
                    organization_developerprofiles.append(developer_profile)

                
            if not is_my_organization:
                user = User.objects.create_user(username=options["username"][0], password=options["password"][0], email=faker.email())
                developer = Developer.objects.create(user=user, organization=organization, first_name=faker.first_name(), last_name=faker.last_name(), phone_number=faker.phone_number(), birthday="2002-11-25")
                is_my_organization = True
                
                self.stdout.write(f"Creating your user... {options['username'][0]}")
            
