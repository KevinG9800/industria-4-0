
from django.contrib import admin
from django.urls import path
from memorama import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('test/', views.test, name='test'),
    path('game/', views.game, name='game'),
    
    
    path('info/', views.info, name='info'),
        path('info/ciberseguridad/', views.ciberseguridad, name='ciberseguridad'),
        path('info/inteligenciaartificial/', views.inteligenciaartificial, name='inteligenciaartificial'),
        path('info/electromovilidad/', views.electromovilidad, name='electromovilidad'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)