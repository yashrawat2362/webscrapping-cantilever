from flask import Flask, render_template, request
import csv

app = Flask(__name__)

def load_data():
    products = []
    with open('data.csv', mode='r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            products.append({
                'link': row['Link'],
                'title': row['Title'],
                'rating': row['Rating'],
                'price': row['Price']
            })
    return products

@app.route('/', methods=['GET', 'POST'])
def index():
    search_query = request.form.get('search', '').lower()
    products = load_data()

    if search_query:
        products = [product for product in products if search_query in product['title'].lower()]

    return render_template('index.html', products=products)
