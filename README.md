## Việc Tử Tế - Mobile Application - Multi-platform
### Introdution:
### Architecture:
![image](https://user-images.githubusercontent.com/76431966/216554058-99bcf797-5505-4269-9c89-f2dafa8c2834.png)
### Technology to use:
#### Client Side:
1. React Native(https://reactnative.dev/) - To develop mobile app cross-platform we use React Native and 
Expo(https://expo.dev/) to run in dev environment. Then we use Expo dev to build apk file.
2. We use Axios(https://axios-http.com/) to fetch data from our 
backend(https://github.com/dat1208/volunteer-springboot-mongodb).
3. JWT was used, every request have to Authorize Header with token.
4. We implement login with Google then user data will send to 
our backend to store user's data.
#### Server Side:
1. Spring Boot(https://spring.io/) -  Tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities: Autoconfiguration. An opinionated approach to configuration. The ability to create standalone applications.
2. We use Spring Security(https://spring.io/projects/spring-security) - To secure our server by implement JWT(https://jwt.io/).
3. Bank Open API was used to make donate for fund.
4. Firebase(https://firebase.google.com/) - We stored user's post and all image of post and user in there.
5. We use MongoDB(https://www.mongodb.com/) - We use NoSQL for easy to scale.
6. GoogleMaps(https://developers.google.com/maps) - We  will use google maps in future to suggest nearest distance from user to volunteer place.
7. Scan QR code - We will implement this feature in future to check in and check out when user join volunteer work. 
### List of features:
