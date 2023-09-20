from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import sympy as sp

class LinearProgrammingView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data

        op = data.get('op')
        x1 = data.get('x1')
        x2 = data.get('x2')
        x1_1 = x1
        x2_1 = x2
        x1j1 = data.get('x1j1')
        x2j1 = data.get('x2j1')
        x1j2 = data.get('x1j2')
        x2j2 = data.get('x2j2')
        r1 = data.get('r1')
        r2 = data.get('r2')

        x1, x2 = sp.symbols('X1 X2')
        constraint1 = x1j1*x1 + x1j2*x2 - r1
        constraint2 = x2j1*x1 + x2j2*x2 - r2

        solution3 = sp.solve((constraint1, x2), (x1, x2))
        solution4 = sp.solve((constraint2, x2), (x1, x2))
        solution1 = sp.solve((constraint1, x1), (x1, x2))
        solution2 = sp.solve((constraint2, x1), (x1, x2))

        x1_A, x2_A = solution1[x1], solution1[x2]
        x1_B, x2_B = solution2[x1], solution2[x2]
        x1_C, x2_C = solution3[x1], solution3[x2]
        x1_D, x2_D = solution4[x1], solution4[x2]

        resultados = {
            "resultados": {
                "Punto": ["O", "A", "B", "C", "D"],
                "Coordenada X (X1)": [0.0, float(x1_A), float(x1_C), float(x1_B), float(x1_D)],
                "Coordenada Y (X2)": [0.0, float(x2_A), float(x2_C), float(x2_B), float(x2_D)],
                "Valor de la función objetivo (Z)": [
                    0,
                    float(x1_A * x1_1) + float(x2_A * x2_1),
                    float(x1_C * x1_1) + float(x2_C * x2_1),
                    float(x1_B * x1_1) + float(x2_B * x2_1),
                    float(x1_D * x1_1) + float(x2_D * x2_1)
                ]
            }
        }
        return Response(resultados, status=status.HTTP_200_OK)
