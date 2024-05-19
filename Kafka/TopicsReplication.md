# Topics

* Topics should have a replication factor > 1 (usually between 2 and 3)
* This way if a broker is down, another broker can serve the data
* So say you have Broker 1 which has partition 0 with topic a and it goes down replication mechanism can be used for Broker 2 to access to that information as well

## Concept of leader for a partition
* At any time only ONE broker can be a leader for a given partition
* Producers can only send data to a broker that is leader of the partition
* In the example above Broker 1 is the leader of that partition 0, and Broker 2 is the replica
* Therefore, each partition has one leader and multiple ISR (in-sync-replica)

## Producer Acknowledgment
* Producers can choose to receive acknowledgement of data writes
* acks=0 no acknowledgment that the message was received
* acks=1 producer will wait for leader acknowledgment (limited data loss)
* acks=all leader + replicas acknowledgement (no data loss)