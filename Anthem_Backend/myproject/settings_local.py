# Local development settings for Anthem Global
from .settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

DEBUG = True
ALWAYS_UPLOAD_FILES_TO_AWS = config('ALWAYS_UPLOAD_FILES_TO_AWS', default=True, cast=bool)
print('Using SQLite database for Anthem local development')

