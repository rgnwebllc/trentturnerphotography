from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib import messages
from django.shortcuts import redirect

# Create your views here.
def home(request):
    return render(request, 'home.html')

@csrf_exempt
def contact_submit(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            phone = data.get('phone')
            message = data.get('message')

            print(f"Dummy contact received:\nName: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}")

            return JsonResponse({'status': 'success', 'message': 'Your message has been sent successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid method'}, status=405)