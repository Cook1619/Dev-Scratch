# What is Kafka?
 - Apache Kafka is an open-source distributed streaming platform developed by the Apache Software Foundation. It is designed to handle high-throughput, fault-tolerant, and real-time data streaming. Kafka is widely used for building real-time data pipelines and streaming applications
   Publish-Subscribe Model: Kafka follows a publish-subscribe model, where data is organized into topics. Producers write messages to topics, and consumers subscribe to one or more topics to consume the messages.

 - Topics: A topic is a category or feed name to which records are published. It represents a stream of records. Topics in Kafka are typically divided into multiple partitions for scalability and parallel processing.

 - Producers: Producers are applications or systems that publish messages to Kafka topics. They write messages to topics, and Kafka stores these messages for consumption.

 - Consumers: Consumers are applications or systems that read messages from Kafka topics. They subscribe to one or more topics and consume the messages produced by producers. Consumers can read messages in real-time or process them at their own pace.

 - Partitions: A topic is divided into partitions for scalability and parallel processing. Each partition is an ordered and immutable sequence of records. Partitions allow for distributed storage and parallel consumption by multiple consumers.

 - Brokers: Kafka is designed as a distributed system, and each instance in the cluster is called a broker. Brokers are responsible for handling message storage, replication, and serving consumer requests.

 - Cluster: A Kafka cluster consists of multiple brokers working together to provide high availability and fault tolerance. The cluster distributes the partitions across multiple brokers.

 - Offset: Each message in a partition is assigned a unique identifier called an offset. Offsets represent the position of a message within a partition.

 - Streams: Kafka Streams is a library built on top of Kafka that enables building stream processing applications. It allows for transforming, aggregating, and reacting to streams of events in real-time.

 - Kafka's high throughput, fault tolerance, and real-time capabilities make it well-suited for use cases like log aggregation, event sourcing, real-time analytics, messaging systems, and more. It has gained popularity in the industry for its ability to handle large-scale, real-time data processing and streaming requirements.

 - Uses AVRO which is a data serializer which has backwards and forwards capabilities 
