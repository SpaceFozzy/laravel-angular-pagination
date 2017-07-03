# A Laravel and Angular Pagination Example
This project is meant to demonstrate how pagination can be implemented with Laravel and Angular.

## Notes
 * The project demo is currently up and running at http://demo1.robotmonster.ca/.
 * The Angular portion of the project can be found in the `angular-client/` folder.
 * The Angular component demonstrating basic native Laravel pagination with Angular UI is `angular-client/src/app/basic-pagination` [(link) ](https://github.com/SpaceFozzy/laravel-angular-pagination/tree/master/angular-client/src/app/basic-pagination).
 * The Angular component demonstrating searchable native Laravel pagination with Angular UI is `angular-client/src/app/search-pagination` [(link) ](https://github.com/SpaceFozzy/laravel-angular-pagination/tree/master/angular-client/src/app/search-pagination).

## Local Project Setup
To get the project installed and running locally:
1. Clone the repository.
2. Install the laravel project with composer `composer install`.
3. Create your .env file with your db connection information. Have the db and db user created:
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:W5JIu+haj30/3+XIhXXEva9GISBjcA+aZ6tIKCiGRmA=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_pagination_sample
DB_USERNAME=laravelpaginationsample
DB_PASSWORD=laravelpaginationsample

BROADCAST_DRIVER=log
CACHE_DRIVER=array
SESSION_DRIVER=file
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_KEY=
PUSHER_SECRET=
```
4. Run `php artisan migrate:refresh --seed` to set up your database tables.
5. Install Angular's NPM moduls: `cd angular-client && npm install`
6. Build the Angular project so Laravel can serve it: `ng build --watch`
7. In a new process start the Laravel server from the project root: `php artisan serve`
8. View the project at `localhost:8000/angular`