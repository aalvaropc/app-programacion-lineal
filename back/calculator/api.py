from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LinearProgrammingView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data
        solution_result = 0
        response_data = {
            "solution": solution_result,
        }
        return Response(response_data, status=status.HTTP_200_OK)
