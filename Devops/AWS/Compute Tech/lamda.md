# Lamdas
- Lamda is a building block for many serverless applications
  - Serverless simply means AWS manages the servers for you and you cannot access them.
- Use cases for Lamda
  - Real time file processing
    - CSV -> S3 bucket -> Lamda function -> Stores in DynamoDB table
  - Sending email notifications
    - Code commit -> Cloudwatch -> Lamda -> SNS -> Email
  - Backend business logic
    - Alexa Skill -> Lamda -> DynamoDB
  - Features
    - Supports popular programming languages
    - You author code using your fav dev env or console
    - Lamda can execute your code in response to events
    - Have 15-minute timeout window
  - Pricing Model
    - You are charged based on the duration and the number of requests
      - Compute time
        - No charge is your code is not running
      - Request Count
        - A request is counted each time is starts execution, even if your testing
      - Always free
        - The free usage tier includes 1 million free requests each month