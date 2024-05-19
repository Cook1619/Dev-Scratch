# Brokers
* A Kafka cluster is composed of multiple brokers (servers)
* Each broker is identified with its ID
* Each broker contains certain topic partitions
* After connecting to any broker, you will be connected to the entire cluser
* A good number to get started is 3, big clusters have 100 brokers

## Brokers and topics
* Example a Topic-A with 3 partitions and Topic-B with 2 partitions
* You can have these spread throughout the 3 brokers however you deem necessary
* These partitions being distributed across brokers is know as horizontal scaling
