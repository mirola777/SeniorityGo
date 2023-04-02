import json
from rest_framework.response import Response


class ErrorMiddleware:
    def __init__(self, getResponse):
        self.getResponse = getResponse

    def __call__(self, request):
        response = self.getResponse(request)
        
        if response.status_code >= 400:
            self.customizeErrorMessage(response)

        return response

    def customizeErrorMessage(self, response: Response):
        data = response.data

        if 'error' in data:
            response.data['errors'] = [self.handleError(data['error'])]
            
            response.data.pop('error')
            
        elif 'non_field_errors' in data:
            response.data['errors'] = [self.handleError(
                error) for error in data['non_field_errors']]
            
            response.data.pop('non_field_errors')
            
        elif 'name' in data:
            response.data['errors'] = [self.handleError(
                error) for error in data['name']]
            
            response.data.pop('name')
            
        elif 'description' in data:
            response.data['errors'] = [self.handleError(
                error) for error in data['description']]
            
            response.data.pop('description')
            
        response.content = json.dumps(response.data).encode('utf-8')
        response['Content-Length'] = len(response.content)

    def handleError(self, error):
        if '(name, organization_id)' in error:
            return "duplicated_name"

        if '(level, organization_id)' in error:
            return "duplicated_level"
        
        if 'The fields name, level, organization must make a unique set.' in error:
            return "duplicated_name_level"
        
        if 'This field may not be blank.' in error:
            return "blank_field"

        return error
