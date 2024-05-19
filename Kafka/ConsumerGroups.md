# Consumer Groups
* All the consumer groups in an application read data as consumer groups
* Each consumer within a group reads from exclusive partitions

Partition 0 Partition 1 Partition 2 Partition 3

Say you have a consumer group with 3 consumers, you can have consumer 1 read from 0, consumer 2 read partition 1 and 2 and consumer 3 reads from partition 3. You can also have more consumers then partitions and then it would lead to an inactive consumer

* You can have multiple consumers on one topic, you can have any number of consumer groups reading from a particular topics partition

## Consumer offsets
* Kafka stores the offsets at which a consumer group has been reading
* The offsets committed are in a Kafka topic named __consumer_offsets
* When a consumer in a group has processed data received from Kafka, is should periodically committing the offsets (the Kafka broker will write to __consumer_offsets, not the group itself)
* These offsets are important because if a consumer goes down, it will be able to read back from where it left off thanks to the consumer offsets