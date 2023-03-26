from django.db import models

class ProfileSeniorityRequirement(models.Model):
    profile_seniority = models.ForeignKey('ProfileSeniority', on_delete=models.CASCADE, related_name='profileseniority_requirements')
    requirement = models.ForeignKey('Requirement', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('profile_seniority', 'requirement')