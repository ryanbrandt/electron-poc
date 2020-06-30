# Flask Backend

### Development

- `pipenv install`
- `pipenv run python api/app.py`

Setting environmental variable `FLASK_ENV` will control if app is hot reloaded.

Set `FLASK_ENV=development` for hot reloading

Leave undefined or set `FLASK_ENV=production` otherwise

### Production

- `pipenv build`

Will generate an executable `app.exe`
