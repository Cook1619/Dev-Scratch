# Messaging and Integration Services: SQS
### Coupling defines the interdependencies or connections between components in a system. Loose coupling helps reduce the risk of cascading failures between components
### Monolithic Application - tight coupling, highly dependent on each other comoponents
### Microservices - loose coupling
### Queues - are used to implement loosely coupled systems FIFO
- SQS
  - is a message queueing service that allows you to build loosely coupled systems
  - component to component communication using messages
  - multiple components can add messages to the queue
  - messages are process async manner

# SNS and SES
 - Simple Notification Service
   - allows you to send emails and text messages from your apps
   - publish messages to a topic
   - subscribers receive messages
 - Simple Email Service
   - is an email service that allows you to send richly formatted HTML emails from your apps
   - Ideal choice for marketing campaigns or professional emails
   - Unlike SNS, SES sends HTML emails