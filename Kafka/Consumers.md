# Consumers

* Read data from a topic (identified by name) - pull model
* Producers don't push data to a consumer
* Consumers can read from 1 or more partitions
* Partitions are 0 based index
* Consumers automatically know which broker to read from
* Data will be read in order from low to high offsets within each partition

## Consumers Deserializer
* Since producers serialize the data, consumers need to deserialize 
* Deserialize indicates how to transform bytes into objects/data
* They are used on the value and the key of the message
* They know the format there going to sent in, and there are different types of deserializers
    - String
    - Int
    - Avro
    - Protobuf
* The serialization/deserialization type must not change during a topic lifecycle (create a new topic instead)
