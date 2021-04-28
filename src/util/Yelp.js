const apiKey = 'ytI8s2EyQ73rmrcg06gIGUkRu8IXzOEi-mnK7twHxw1_FBMm8mIUfdqjr03fX4QBOsfnjpfqJWX4yELVzRU7rG_cEf2-eZxat0FmWGjv9DROix-6r9VhUl4ft6iHYHYx'
  ;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())

      .then((jsonResponse) => {
        // Validate jsonResponse has businesses key
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_Code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
