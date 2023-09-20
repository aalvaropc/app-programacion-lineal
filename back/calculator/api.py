from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LinearProgrammingView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data

        op = data.get('op')
        x1 = data.get('x1')
        x2 = data.get('x2')
        x1j1 = data.get('x1j1')
        x2j1 = data.get('x2j1')
        x1j2 = data.get('x1j2')
        x2j2 = data.get('x2j2')
        r1 = data.get('r1')
        r2 = data.get('r2')

        x1_A = 0
        x2_A = r1 / x2j1 if x2j1 != 0 else 0

        x1_B = r2 / x1j2 if x1j2 != 0 else 0
        x2_B = 0

        x2_C = 0
        x1_C = r1 / x1j1 if x1j1 != 0 else 0

        x1_D = 0
        x2_D = r2 / x2j2 if x2j2 != 0 else 0

        z_O = x1 * 0 + x2 * 0
        z_A = x1 * x1_A + x2 * x2_A
        z_B = x1 * x1_B + x2 * x2_B
        z_C = x1 * x1_C + x2 * x2_C
        z_D = x1 * x1_D + x2 * x2_D

        resultados = {
            "resultados": {
                "Punto": ["O", "A", "B", "C", "D"],
                "Coordenada X (X1)": [0, x1_A, x1_B, x1_C, x1_D],
                "Coordenada Y (X2)": [0, x2_A, x2_B, x2_C, x2_D],
                "Valor de la función objetivo (Z)": [z_O, z_A, z_B, z_C, z_D]
            }
        }

        return Response(resultados, status=status.HTTP_200_OK)
