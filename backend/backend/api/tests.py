from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APITestCase
from api.models.organization import Organization
from api.models.requirement import Requirement
from api.models.seniority import Seniority
from api.models.profile import Profile
from api.serializers.organization_serializer import OrganizationSerializer
import json


class OrganizationTestCase(APITestCase):
    def setUp(self):
        self.client = Client()
        

    def test_get_all_organizations(self):
        # create some organizations
        org = Organization.objects.create(name='Org1')
        org = Organization.objects.create(name='Org2')

        # make a GET request to the view
        response = self.client.get('/api/organization/all')

        # check that the response status code is 200
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(len(response.data), 2)


    def test_create_organizations(self):
        # information of the organization to create
        data = {
            'name':'SoftServe',
            'image':'https://www.ccit.org.co/wp-content/uploads/softserve.jpg'
        }
        response = self.client.post('/api/organization/create',  data)

        # check that the response status code is 201
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # check the organization created in the database
        org = Organization.objects.get(name='SoftServe')
        self.assertIsNotNone(org)


    def test_delete_organizations(self):

        org = Organization.objects.create(name='Endava')

        response = self.client.delete(f'/api/organization/delete/{org.id}')

        # Check that the response status code is 204
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Check that the organization was deleted
        self.assertFalse(Organization.objects.filter(id=org.id).exists())


    def test_get_organizations(self):
        org = Organization.objects.create(name='Endava')

        response = self.client.get(f'/api/organization/get/{org.id}')

        # Check if the organization info is getting ok
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the name of the response is the same
        self.assertEqual(response.data['name'], org.name)


    def test_update_organizations(self):

        org = Organization.objects.create(name='SoftServe')

        data = {
            'name':'Endava',
            'image':'https://www.ccit.org.co/wp-content/uploads/softserve.jpg'
        }

        # make a GET request to the view
        response = self.client.put(f'/api/organization/update/{org.id}', json.dumps(data), 
        content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # check the name is updated
        updated_org = Organization.objects.get(pk=org.id)
        self.assertEqual(data['name'], updated_org.name)




class RequirementTestCase(APITestCase):
    def SetUp(self):
        self.client = Client()


    def test_get_all_requirements(self):

        req = Requirement.objects.create(
            name='req1',
            description='first req',
            points=230,
            image="https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get('/api/requirement/all')

        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_requirements(self):
        org = Organization.objects.create(name="Endava")

        # information of the requirement to create
        data = {
            'name':'SQL certificate',
            'description':'document that certifies you know about SQL',
            'points':230,
            'image':'https://www.ccit.org.co/wp-content/uploads/softserve.jpg',
            'organization': org.id
        }
        response = self.client.post('/api/requirement/create',  data)

        # check that the response status code is 201
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # check that requirement was created in the database
        req = Requirement.objects.get(name='SQL certificate')
        self.assertIsNotNone(req)

    
    def test_delete_requirements(self):

        req = Requirement.objects.create(
            name='req1',
            description='first req',
            points=230,
            image="https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
            organization=Organization.objects.create(name='org')
        )

        response = self.client.delete(f'/api/requirement/delete/{req.id}')

        # Check that the response status code is 204
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Check that the requirement was deleted
        self.assertFalse(Requirement.objects.filter(id=req.id).exists())


    def test_get_requirements(self):
        req = Requirement.objects.create(
            name='req1',
            description='first req',
            points=230,
            image="https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get(f'/api/requirement/get/{req.id}')

        # Check if the requirement info is getting ok
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the name of the response is the same
        self.assertEqual(response.data['name'], req.name)

    
    def test_update_requirements(self):

        req = Requirement.objects.create(
            name='req1',
            description='first req',
            points=230,
            image="https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
            organization=Organization.objects.create(name='Endava')
        )

        data = {
            'name':'req2',
            'description':'another req',
            'points':340,
            'image':'https://www.ccit.org.co/wp-content/uploads/softserve.jpg',
            'organization':req.organization.id
        }

        # make a GET request to the view
        response = self.client.put(f'/api/requirement/update/{req.id}', json.dumps(data), 
        content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # check the name is updated
        updated_org = Requirement.objects.get(pk=req.id)
        self.assertEqual(data['name'], updated_org.name)



class SeniorityTestCase(APITestCase):
    def SetUp(self):
        self.client = Client()

    
    def test_get_all_seniorities(self):

        senior = Seniority.objects.create(
            name='Middle',
            level=3,
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get('/api/seniority/all')

        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_create_seniorities(self):
        org = Organization.objects.create(name="Endava")

        # information of the seniority to create
        data = {
            'name':'Middle',
            'level':2,
            'organization': org.id
        }
        response = self.client.post('/api/seniority/create',  data)

        # check that the response status code is 201
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # check the seniority was created in the database
        senior = Seniority.objects.get(name='Middle')
        self.assertIsNotNone(senior)

    
    def test_delete_seniorities(self):

        senior = Seniority.objects.create(
            name='Middle',
            level=2,
            organization=Organization.objects.create(name='org')
        )

        response = self.client.delete(f'/api/seniority/delete/{senior.id}')

        # Check that the response status code is 204
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Check that the seniority was deleted
        self.assertFalse(Seniority.objects.filter(id=senior.id).exists())


    def test_get_seniorities(self):

        senior = Seniority.objects.create(
            name='Middle',
            level=2,
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get(f'/api/seniority/get/{senior.id}')

        # Check if the seniority info is getting ok
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the name of the response is the same
        self.assertEqual(response.data['name'], senior.name)

    
    def test_update_requirements(self):

        senior = Seniority.objects.create(
            name='Middle',
            level=2,
            organization=Organization.objects.create(name='org')
        )

        data = {
            'name':'Junior',
            'level':3,
            'organization':senior.organization.id
        }

        # make a GET request to the view
        response = self.client.put(f'/api/seniority/update/{senior.id}', json.dumps(data), 
        content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # check the name is updated
        updated_org = Seniority.objects.get(pk=senior.id)
        self.assertEqual(data['name'], updated_org.name)



class ProfileTestCase(APITestCase):
    def SetUp(self):
        self.client = Client()

    
    def test_get_all_profiles(self):

        profile = Profile.objects.create(
            name='DevOps',
            description='DevOps Profile',
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get('/api/profile/all')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    
    def test_create_profiles(self):

        org = Organization.objects.create(name="Endava")

        # information of the profile to create
        data = {
            'name':'DevOps',
            'description':'DevOps Profile',
            'organization':org.id,
            'seniorities':[]
        }
        response = self.client.post('/api/profile/create',  json.dumps(data), 
        content_type='application/json')

        # check that the response status code is 201
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # check the profile was created in the database
        profile = Profile.objects.get(name='DevOps')
        self.assertIsNotNone(profile)


    def test_delete_profiles(self):

        profile = Profile.objects.create(
            name='DevOps',
            description='DevOps Profile',
            organization=Organization.objects.create(name='org')
        )

        response = self.client.delete(f'/api/profile/delete/{profile.id}')

        # Check that the response status code is 204
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Check that the profile was deleted
        self.assertFalse(Profile.objects.filter(id=profile.id).exists())


    def test_get_profiles(self):

        profile = Profile.objects.create(
            name='DevOps',
            description='DevOps Profile',
            organization=Organization.objects.create(name='org')
        )

        response = self.client.get(f'/api/profile/get/{profile.id}')

        # Check if the profile info is getting ok
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if the name of the response is the same
        self.assertEqual(response.data['name'], profile.name)


