from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib import messages
from django.shortcuts import redirect
from django.utils.timezone import now

# Create your views here.
def home(request):
    return render(request, 'home.html', {"now": now()})

def about(request):
    return render(request, 'about.html')

def style(request):
    return render(request, 'style.html')

def portfolio(request):
    return render(request, 'portfolio.html')

def testimonials(request):
    return render(request, 'testimonials.html')

def packages(request):
    return render(request, 'packages.html')

def booking(request):
    return render(request, 'booking.html')

def custom_permission_denied_view(request, exception=None):
    return render(request, '403.html', status=403)

def custom_404_view(request, exception=None):
    return render(request, '404.html', status=404)

@csrf_exempt
def contact_submit(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            phone = data.get('phone')
            message = data.get('message')

            # Send email, save to DB, etc.

            return JsonResponse({'status': 'success', 'message': 'Message sent successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)