from bs4 import BeautifulSoup
import csv

# Load and parse the HTML file
with open('web.html', 'r', encoding='utf-8') as file:
    soup = BeautifulSoup(file, 'html.parser')

# Find all divs with the specified class
divs = soup.find_all('div', class_='sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20')

# List to store the parsed data
data_list = []

# Loop through each div and extract the required information
for div in divs:
    # Extract the image link
    img_tag = div.find('img', class_='s-image')
    link = img_tag['src'] if img_tag else ''

    # Extract the title
    title_tag = div.find('span', class_='a-size-base-plus a-color-base a-text-normal')
    title = title_tag.text.strip() if title_tag else ''

    # Extract the rating
    rating_tag = div.find('span', class_='a-icon-alt')
    rating = rating_tag.text.strip() if rating_tag else ''

    # Extract the price
    price_tag = div.find('span', class_='a-price-whole')
    price = price_tag.text.strip() if price_tag else ''

    # Append the extracted data to the list
    data_list.append([link, title, rating, price])

# Write the data to a CSV file
with open('data.csv', 'w', newline='', encoding='utf-8') as csv_file:
    writer = csv.writer(csv_file)
    # Write the header
    writer.writerow(['Link', 'Title', 'Rating', 'Price'])
    # Write the data rows
    writer.writerows(data_list)

print("Data has been written to data.csv")
