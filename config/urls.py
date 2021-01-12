from django.contrib import admin
from django.urls import include, path
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', include('posts.urls')),
    path('api/users/', include('users.urls')),
    path('api/auth/', include('rest_auth.urls')),
    path('api/auth/register/', include('rest_auth.registration.urls')),
    path('schema/', get_schema_view( # スキーマ表示の追加
        title="Blogress",
        description="API for all things …"
    ), name='openapi-schema'),
    path('docs/', TemplateView.as_view( # ドキュメント表示の追加
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
]
