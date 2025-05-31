from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('style/', views.style, name='style'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('testimonials/', views.testimonials, name='testimonials'),
    path('packages/', views.custom_permission_denied_view, name='packages'),
    path('booking/', views.custom_permission_denied_view, name='booking'),
    path('contact-submit/', views.contact_submit, name='contact_submit'),
]