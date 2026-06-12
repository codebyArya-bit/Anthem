
from pathlib import Path
from datetime import timedelta
import os
from decouple import config, Csv

#import wordpress_api

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('DJANGO_SECRET_KEY', default='django-insecure-uczo%0a!buj4$0n(6@3tyd#3!5@vkwcwc*0rlw6(urb0j4f@aj')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', default=False, cast=bool)

ALLOWED_HOSTS = config(
    'ALLOWED_HOSTS',
    default='anthemgt.com,www.anthemgt.com,103.191.132.173,localhost,127.0.0.1',
    cast=Csv()
)

 
BASE_URL = config('BASE_URL', default='https://www.anthemgt.com')
#BASE_URL = "https://www.anthemgt.com"  #production

#The above lines needs to be changed accordingly in production and developmentenvironment


DATA_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024  # 10MB



AUTH_USER_MODEL = 'account.Account'
# AUTHENTICATION_BACKENDS = (
#     'django.contrib.auth.backends.AllowAllUsersModelBackend',
#     'account.backends.CaseInsensitiveModelBackend',
#     )

AUTHENTICATION_BACKENDS = (
    'account.backends.CaseInsensitiveModelBackend',  # your fixed backend
    'django.contrib.auth.backends.ModelBackend',     # fallback
)



# Application definition

INSTALLED_APPS = [
    'notice',
    'account.apps.AccountConfig',
    'accountAPIs.apps.AccountapisConfig',
    'home.apps.HomeConfig',
    'onlineregistration',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'django_filters',
    'corsheaders',
    'storages',
    'Vehicles',
    'drf_spectacular',
    #'django_extensions',
    # 'rest_framework',
   

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
CORS_ALLOW_ALL_ORIGINS = config('CORS_ALLOW_ALL_ORIGINS', default=False, cast=bool) 

ROOT_URLCONF = 'myproject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates'), os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WP_URL = 'http://your-wordpress-app.com/'
BLOG_POSTS_PER_PAGE = 5



WSGI_APPLICATION = 'myproject.wsgi.application'

ASGI_APPLICATION = 'myproject.asgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': config('DB_ENGINE', default='django.db.backends.postgresql_psycopg2'),
        'NAME': config('DB_NAME', default='anthem_global_db'),
        'USER': config('DB_USER', default='anthem_global_user'),
        'PASSWORD': config('DB_PASSWORD', default=''),
        'HOST': config('DB_HOST', default='127.0.0.1'),
        'PORT': config('DB_PORT', default='5432'),
    }
}




# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [('127.0.0.1', 6379)],
        },
    },
}



LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

ALWAYS_UPLOAD_FILES_TO_AWS = config('ALWAYS_UPLOAD_FILES_TO_AWS', default=True, cast=bool)

#This means you are uploding to AWS even when running locally


#if BASE_URL=="http://127.0.0.1:8000":#https://www.anthemgt.com

if ALWAYS_UPLOAD_FILES_TO_AWS:
   AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID', default='')
   AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY', default='')
   AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME', default='edrspace')
   AWS_S3_ENDPOINT_URL = config('AWS_S3_ENDPOINT_URL', default='https://sgp1.digitaloceanspaces.com')
   AWS_S3_OBJECT_PARAMETERS = {
      'CacheControl': 'max-age=86400',
   }
   AWS_LOCATION = config('AWS_LOCATION', default='anthem-media')
   AWS_QUERYSTRING_AUTH = False
   AWS_DEFAULT_ACL = 'public-read'
   
   # Use custom domain for clean virtual host style URLs (crucial for DO Spaces public URLs)
   AWS_S3_CUSTOM_DOMAIN = config('AWS_S3_CUSTOM_DOMAIN', default=f'{AWS_STORAGE_BUCKET_NAME}.sgp1.digitaloceanspaces.com')
   
   STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{AWS_LOCATION}/'
   STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
   DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'




#twillio credentials to send SMS to phone
ACCOUNT_SID=config('TWILIO_ACCOUNT_SID', default='')
AUTH_TOKEN=config('TWILIO_AUTH_TOKEN', default='')



#to be used if you load files locally
if not ALWAYS_UPLOAD_FILES_TO_AWS:
   STATIC_URL = '/static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'




STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, 'media'),
   # os.path.join(BASE_DIR,'build/static')
]



#STATIC_ROOT = os.path.join(BASE_DIR, 'static_cdn')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media_cdn')

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'account.authentication.CookieJWTAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    "DEFAULT_THROTTLE_RATES": {
        "blog_comments": "10/min",
    },
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Anthem Global API',
    'DESCRIPTION': 'Anthem Global Backend API Documentation',
    'VERSION': '2.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}





# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
#if DEBUG:
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

#https://myaccount.google.com/lesssecureapps
#https://accounts.google.com/b/0/displayunlockcaptcha
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = config('EMAIL_PORT', default=587, cast=int)
EMAIL_HOST_USER = config('EMAIL_HOST_USER', default='')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD', default='')
DEFAULT_FROM_EMAIL = config('DEFAULT_FROM_EMAIL', default=EMAIL_HOST_USER or 'no-reply@anthemgt.com')
CONTACT_EMAIL = config('CONTACT_EMAIL', default='contact@anthemgt.com')
EMAIL_USE_TLS = config('EMAIL_USE_TLS', default=True, cast=bool)

# ========== CORS SETTINGS ==========
# Allow all origins for development
CORS_ALLOW_ALL_ORIGINS = config('CORS_ALLOW_ALL_ORIGINS', default=False, cast=bool)
CORS_ALLOW_CREDENTIALS = config('CORS_ALLOW_CREDENTIALS', default=True, cast=bool)

# Specific allowed origins (optional)
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default='https://anthemgt.com,https://www.anthemgt.com,http://103.191.132.173:3007,http://localhost:3000,http://127.0.0.1:3000',
    cast=Csv()
)

CSRF_TRUSTED_ORIGINS = config(
    'CSRF_TRUSTED_ORIGINS',
    default='https://anthemgt.com,https://www.anthemgt.com,http://103.191.132.173:3007',
    cast=Csv()
)

# Allowed methods
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET', 
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

# Allowed headers
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]



SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60000),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=50),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('Bearer', 'JWT'),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
    'JTI_CLAIM': 'jti',
    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}












